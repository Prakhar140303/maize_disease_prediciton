import React, { useState } from 'react';

const Chatbot = () => {
  const [input, setInput] = useState('');
  const [chatLog, setChatLog] = useState([]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const newChat = [...chatLog, { sender: 'You', message: input }];
    setChatLog(newChat);
    setInput('');

    try {
      const res = await fetch('http://127.0.0.1:5000/chatbot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: input })
      });
      const data = await res.json();
      setChatLog([...newChat, { sender: 'Bot', message: data.response }]);
    } catch (err) {
      setChatLog([...newChat, { sender: 'Bot', message: 'Error contacting chatbot.' }]);
    }
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.chatLog}>
        {chatLog.map((msg, i) => (
          <p key={i}><strong>{msg.sender}:</strong> {msg.message}</p>
        ))}
      </div>
      <input
        style={styles.input}
        type="text"
        placeholder="Ask something..."
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <button style={styles.button} onClick={handleSend}>Send</button>
    </div>
  );
};

const styles = {
  wrapper: {
    position: 'fixed',
    bottom: 20,
    right: 20,
    width: 300,
    backgroundColor: 'white',
    border: '1px solid #ccc',
    padding: 10,
    borderRadius: 5,
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
  },
  chatLog: {
    maxHeight: 200,
    overflowY: 'auto',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    padding: 5,
    marginBottom: 5,
  },
  button: {
    width: '100%',
    padding: 5,
  }
};

export default Chatbot;
