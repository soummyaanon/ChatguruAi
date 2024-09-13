import React, { useState } from 'react';
import ConfigPanel from './Chatcoonfig';
import ChatbotUI from './Chatbot';

export default function Layout({ config, updateConfig }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-200 text-white overflow-hidden">
      <header className="flex h-14 items-center justify-between border-b border-gray-700 px-4 lg:px-6 bg-gray-800">
        <h1 className="text-lg font-semibold">Chatguru Task</h1>
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={toggleSidebar}
        >
          {isSidebarOpen ? 'Close' : 'Menu'}
        </button>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`${
            isSidebarOpen ? 'block' : 'hidden'
          } lg:block w-full lg:w-64 border-b lg:border-b-0 lg:border-r border-gray-200 bg-gray-800 overflow-y-auto absolute lg:relative z-10`}
        >
          <div className="p-4">
            <h2 className="mb-2 text-lg font-semibold">Configuration Tool</h2>
            <ConfigPanel config={config} updateConfig={updateConfig} />
          </div>
        </aside>
        <main className="flex-1 bg-gray-900 overflow-hidden w-full">
          <div className="h-full flex flex-col p-4">
            <h2 className="mb-2 text-lg font-semibold">Chatbot UI</h2>
            <div className="flex-1 overflow-y-auto">
              <ChatbotUI config={config} />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}