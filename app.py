from flask import Flask, request, jsonify
from tensorflow.keras.models import load_model
from PIL import Image
import numpy as np
import json
import os
import csv
from datetime import datetime
from flask_cors import CORS
import google.generativeai as genai

app = Flask(__name__)
CORS(app)

# Load classification model
model = load_model("best_model.h5")

# Class names and solutions
class_names = ["Blight", "Common_Rust", "Gray_Leaf_Spot", "Healthy"]
with open("solutions.json", "r") as f:
    solutions = json.load(f)

# Preprocess image
def preprocess_image(image):
    image = image.resize((224, 224))
    image = np.array(image) / 255.0
    image = np.expand_dims(image, axis=0)
    return image

# Endpoint: Predict disease from image
@app.route('/predict', methods=['POST'])
def predict():
    if 'image' not in request.files:
        return jsonify({'error': 'No image uploaded'}), 400

    file = request.files['image']
    image = Image.open(file)
    image = preprocess_image(image)

    prediction = model.predict(image)[0]
    predicted_class = class_names[np.argmax(prediction)]
    confidence = float(np.max(prediction))

    return jsonify({
        'prediction': predicted_class,
        'confidence': confidence,
        'solutions': solutions.get(predicted_class, [])
    })

# Endpoint: Store feedback
@app.route('/feedback', methods=['POST'])
def feedback():
    feedback_data = request.json
    predicted_class = feedback_data.get('predicted_class')
    user_feedback = feedback_data.get('feedback')
    image_url = feedback_data.get('image_url')

    with open('feedback_log.csv', mode='a', newline='') as file:
        writer = csv.writer(file)
        writer.writerow([datetime.now(), predicted_class, user_feedback, image_url])

    return jsonify({'message': 'Feedback received, thank you!'})

# 🔐 Gemini Chatbot Setup
genai.configure(api_key="AIzaSyBSJs9jbFJuLrzLVByvBPayCtJ-xZ9I7Vk")  # Replace with your key
chat_model = genai.GenerativeModel("gemini-1.5-pro")

# Endpoint: Chatbot

@app.route("/chatbot", methods=["POST"])
def chatbot():
    user_message = request.json.get("message", "")
    if not user_message:
        return jsonify({"response": "Please type a question."})

    try:
        response = chat_model.generate_content(user_message)
        reply = response.text
    except Exception as e:
        if "429" in str(e):
            reply = "Quota limit reached. Please try again later."
        else:
            reply = f"Error: {str(e)}"

    return jsonify({"response": reply})

if __name__ == '__main__':
    app.run(debug=True)
