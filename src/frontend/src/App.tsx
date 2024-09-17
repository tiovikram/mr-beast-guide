import React, { useState } from 'react'
import { Paperclip, Send } from 'lucide-react'
import mrBeastLogo from '/Users/juliansaks/Desktop/be-like-beast/be-like-beast/src/mr-beast-logo.png'

const AssistantUI: React.FC = () => {
  const [message, setMessage] = useState('')

  return (
    <div className="flex h-screen bg-white text-black">
      {/* Navigation Bar */}
      <nav className="w-64 bg-white border-r border-gray-200 p-4">
        <div className="flex items-center justify-center mb-6">
          <img src={mrBeastLogo} alt="Mr Beast Logo" className="w-32 h-auto" />
        </div>
        <h2 className="text-xl font-bold mb-4">Be Like Beast</h2>
        <button className="w-full bg-blue-100 text-blue-600 py-2 px-4 rounded-md mb-4 flex items-center justify-center">
          <span className="mr-2">+</span> New Beast Idea
        </button>
        <div className="space-y-2">
          {/* Chat history items would go here */}
        </div>
      </nav>
      {/* Main Chat Area */}
      <main className="flex-1 flex flex-col">
        {/* Model Selection */}
        <div className="border-b border-gray-200 p-4 flex justify-between items-center">
          <p className="font-bold text-lg">Be Like Beast gives you instant access into Mr Beast's production secrets</p>
        </div>
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 flex flex-col justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={mrBeastLogo} alt="Mr Beast Logo" className="w-64 h-auto mb-6" />
            <div className="text-center">
              <p className="font-bold text-3xl">Be A Beast. Reach Millions</p>
            </div>
          </div>
          {/* More messages would be added here */}
        </div>
        {/* Prompt Buttons */}
        <div className="flex flex-col items-center mb-8">
          <div className="flex space-x-4 mb-4">
            <button className="py-3 px-6 text-lg border border-gray-300 rounded-md hover:bg-gray-100">
              How to make viral videos
            </button>
            <button className="py-3 px-6 text-lg border border-gray-300 rounded-md hover:bg-gray-100">
              How to make millions from youtube
            </button>
          </div>
          <div className="flex space-x-4">
            <button className="py-3 px-6 text-lg border border-gray-300 rounded-md hover:bg-gray-100">
              How to grow your audience
            </button>
            <button className="py-3 px-6 text-lg border border-gray-300 rounded-md hover:bg-gray-100">
              Best video editing tips
            </button>
          </div>
        </div>
        {/* Message Input */}
        <div className="border-t border-gray-200 p-4">
          <div className="flex items-center bg-white border border-gray-300 rounded-md">
            <button className="p-2 text-gray-500 hover:text-blue-500">
              <Paperclip size={20} />
            </button>
            <input
              type="text"
              placeholder="Access the beast..."
              className="flex-1 p-2 outline-none"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="p-2 text-white bg-blue-500 rounded-r-md hover:bg-blue-600">
              <Send size={20} />
            </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default AssistantUI
