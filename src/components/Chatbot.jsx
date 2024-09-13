import React, { useState, useRef, useEffect } from 'react';
import { Send, User, Bot } from 'lucide-react';

function ChatbotUI({ config, className }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  useEffect(() => {
    if (config.initialMessage) {
      setMessages([{ text: config.initialMessage, sender: 'bot' }]);
    }
  }, [config.initialMessage]);

  const sendMessage = () => {
    if (input.trim()) {
      const newMessage = { text: input, sender: 'user' };
      setMessages([...messages, newMessage]);
      setInput('');

      setTimeout(() => {
        const botMessage = { text: `You said: ${input}`, sender: 'bot' };
        setMessages(prevMessages => [...prevMessages, botMessage]);
      }, 1000);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className={`flex flex-col h-full ${className}`}>
      <div className={`flex-grow overflow-y-auto mb-4 space-y-4 p-2 sm:p-4 ${config.theme === 'dark' ? 'bg-gray-800' : 'bg-white'} rounded-lg`}>
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`flex items-end space-x-2 ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : 'flex-row'}`}>
              <div className={`p-1 sm:p-2 rounded-full ${message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-600'}`}>
                {message.sender === 'user' ? <User size={16} /> : <Bot size={16} />}
              </div>
              <span
                className={`inline-block p-2 sm:p-3 rounded-lg max-w-xs lg:max-w-md ${
                  message.sender === 'user' ? 'bg-blue-500' : 'bg-gray-700'
                }`}
                style={{
                  fontWeight: config.messageStyle === 'bold' ? 'bold' : 'normal',
                  fontStyle: config.messageStyle === 'italic' ? 'italic' : 'normal',
                  color: config.textColor,
                }}
              >
                {message.text}
              </span>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      <div className="flex flex-col space-y-2">
        {config.suggestedCategories && (
          <div className="flex flex-wrap gap-2">
            {config.suggestedCategories.split(',').map((category, index) => (
              <button
                key={index}
                onClick={() => setInput(category.trim())}
                className="bg-gray-700 text-white px-2 sm:px-3 py-1 rounded-full text-xs sm:text-sm hover:bg-gray-600 transition duration-300"
              >
                {category.trim()}
              </button>
            ))}
          </div>
        )}
        <div className="flex items-center bg-gray-700 rounded-lg overflow-hidden">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder={config.placeholder}
            className="flex-grow p-2 sm:p-3 bg-transparent text-white placeholder-gray-400 focus:outline-none"
            style={{ color: config.textColor }}
            aria-label="Type a message"
          />
          <button
            onClick={sendMessage}
            className="bg-blue-500 text-white p-2 sm:p-3 hover:bg-blue-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
            aria-label="Send message"
          >
            <Send size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChatbotUI;