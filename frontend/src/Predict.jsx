import React from 'react'
import ImageUpload from './utils/ImageUpload'
import Chatbot from './utils/Chatbot.jsx'
export default function Predict() {
  return (
    <div className='bg-[#c9df8a] h-screen'>
      <ImageUpload />
      <Chatbot />
    </div>
  )
}
