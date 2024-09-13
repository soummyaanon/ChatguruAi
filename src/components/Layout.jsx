import React from 'react';
import ConfigPanel from './Chatcoonfig';
import ChatbotUI from './Chatbot';

export default function Layout({ config, updateConfig }) {
  return (
    <div className="flex h-screen flex-col bg-gray-900 text-white">
      <header className="flex h-14 items-center justify-between border-b border-gray-700 px-4 lg:px-6 bg-gray-800">
        <h1 className="text-lg font-semibold">Chatguru Task</h1>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside className="w-64 border-r border-gray-700 bg-gray-800">
          <div className="h-full overflow-y-auto">
            <div className="p-4">
              <h2 className="mb-2 text-lg font-semibold">Configuration Tool</h2>
              <ConfigPanel config={config} updateConfig={updateConfig} />
            </div>
          </div>
        </aside>
        <main className="flex-1 bg-gray-900">
          <div className="h-full overflow-y-auto">
            <div className="p-4 h-full flex flex-col">
              <h2 className="mb-2 text-lg font-semibold">Chatbot Ui </h2>
              <div className="flex-1 overflow-y-auto">
                <ChatbotUI config={config} />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}