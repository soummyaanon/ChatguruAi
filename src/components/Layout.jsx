import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import ConfigPanel from './Chatcoonfig'
import ChatbotUI from './Chatbot'

export default function Layout({ config, updateConfig }) {
  const [isConfigOpen, setIsConfigOpen] = useState(false)

  const toggleConfig = () => {
    setIsConfigOpen(!isConfigOpen)
  }

  return (
    <div className="flex flex-col h-screen bg-gray-900 text-white overflow-hidden">
      <header className="flex h-14 items-center justify-between border-b border-gray-700 px-4 lg:px-6 bg-gray-800">
        <h1 className="text-lg font-semibold">Chatguru Task</h1>
        <button
          className="text-white focus:outline-none"
          onClick={toggleConfig}
          aria-label={isConfigOpen ? "Close configuration" : "Open configuration"}
        >
          {isConfigOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </header>
      <div className="flex flex-1 overflow-hidden">
        <aside
          className={`
            ${isConfigOpen ? 'translate-x-0' : '-translate-x-full'}
            fixed inset-y-0 left-0 z-50 w-full sm:w-64 lg:w-64 
            transition-transform duration-300 ease-in-out
            lg:relative lg:translate-x-0
            border-r border-gray-700 bg-gray-800 overflow-y-auto
          `}
        >
          <div className="p-4">
            <div className="flex justify-between items-center lg:hidden">
              <h2 className="text-lg font-semibold">Configuration Tool</h2>
              <button onClick={toggleConfig} className="text-white" aria-label="Close configuration">
                <X size={24} />
              </button>
            </div>
            <div className="mt-4 lg:mt-0">
              <ConfigPanel config={config} updateConfig={updateConfig} />
            </div>
          </div>
        </aside>
        <main className="flex-1 overflow-hidden w-full">
          <div className="h-full flex flex-col p-4">
            <h2 className="mb-2 text-lg font-semibold">Chatbot UI</h2>
            <div className="flex-1 overflow-y-auto">
              <ChatbotUI config={config} />
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}