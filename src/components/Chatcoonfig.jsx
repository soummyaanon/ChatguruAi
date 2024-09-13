import React from 'react';
import { MessageSquare, User, MessageCircle, Palette, Sun } from 'lucide-react';

const configItems = [
  {
    label: 'Placeholder',
    icon: MessageSquare,
    key: 'placeholder',
    type: 'text',
    placeholder: 'Enter input placeholder',
  },
  {
    label: 'Initial Message',
    icon: MessageCircle,
    key: 'initialMessage',
    type: 'textarea',
    placeholder: 'Enter initial message',
  },
  {
    label: 'Suggested Message Categories',
    icon: MessageSquare,
    key: 'suggestedCategories',
    type: 'text',
    placeholder: 'Enter categories separated by commas',
  },
  {
    label: 'Message Style',
    icon: User,
    key: 'messageStyle',
    type: 'select',
    options: [
      { value: 'normal', label: 'Normal' },
      { value: 'bold', label: 'Bold' },
      { value: 'italic', label: 'Italic' },
    ],
  },
  {
    label: 'Text Color',
    icon: Palette,
    key: 'textColor',
    type: 'color',
  },
  {
    label: 'Theme Changer',
    icon: Sun,
    key: 'theme',
    type: 'select',
    options: [
      { value: 'light', label: 'Light' },
      { value: 'dark', label: 'Dark' },
    ],
  },
];

function ConfigPanel({ config, updateConfig }) {
  return (
    <div className="w-full h-full overflow-y-auto">
      <div className="space-y-4">
        {configItems.map((item, index) => (
          <div key={index} className="bg-gray-700 p-3 sm:p-4 rounded-lg shadow-md w-full">
            <label className="block mb-2 text-sm font-medium text-gray-300 flex items-center">
              <item.icon className="mr-2" size={18} />
              {item.label}
            </label>
            {item.type === 'textarea' ? (
              <textarea
                value={config[item.key]}
                onChange={(e) => updateConfig({ [item.key]: e.target.value })}
                className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder={item.placeholder}
                rows="3"
              />
            ) : item.type === 'select' ? (
              <select
                value={config[item.key]}
                onChange={(e) => updateConfig({ [item.key]: e.target.value })}
                className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
              >
                {item.options.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            ) : (
              <input
                type={item.type}
                value={config[item.key]}
                onChange={(e) => updateConfig({ [item.key]: e.target.value })}
                className="w-full p-2 bg-gray-600 border border-gray-500 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                placeholder={item.placeholder}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ConfigPanel;