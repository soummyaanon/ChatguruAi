import React, { useState } from 'react';
import Layout from './components/Layout';
import './App.css';

export default function App() {
  const [config, setConfig] = useState({
    placeholder: 'Type a message...',
    initialMessage: 'Welcome to Chatguru! How can I assist you today?',
    suggestedCategories: 'General, Support, Feedback',
    messageStyle: 'normal',
    textColor: '#ffffff',
    theme: 'dark', // Default theme
  });

  const updateConfig = (newConfig) => {
    setConfig({ ...config, ...newConfig });
  };

  return (
    <div className="min-h-screen w-full bg-gray-800 text-white flex items-center justify-center p-4">
      <div className="w-full max-w-7xl">
        <main className="w-full bg-gray-800 rounded-lg shadow-xl overflow-hidden">
          <Layout config={config} updateConfig={updateConfig} />
        </main>
      </div>
    </div>
  );
}