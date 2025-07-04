import React, { useState } from 'react';
import { Tab } from '../types';
import { mainTabs } from '../data/mockData';

const TabBar: React.FC = () => {
  const [tabs, setTabs] = useState<Tab[]>(mainTabs);

  const handleTabClick = (tabId: string) => {
    setTabs(tabs.map(tab => ({
      ...tab,
      isActive: tab.id === tabId
    })));
    console.log('Tab clicked:', tabId);
  };

  const handleAddTab = () => {
    console.log('Add tab clicked');
  };

  const getTabColor = (color?: string, isActive?: boolean) => {
    if (!isActive) return 'bg-gray-100 text-gray-600 hover:bg-gray-200';
    
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'green':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'purple':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'orange':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <div className="border-b border-gray-200 bg-white">
      <div className="flex items-center px-4 py-2">
        {/* Main spreadsheet tab - active */}
        <button 
          onClick={() => handleTabClick('q3-financial')}
          className={`px-4 py-2 rounded-t-lg text-sm font-medium mr-2 border-t border-l border-r ${
            tabs.find(t => t.id === 'q3-financial')?.isActive 
              ? 'bg-blue-50 text-blue-800 border-blue-200 -mb-px' 
              : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
          }`}
        >
          <span className="inline-block w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
          Q3 Financial Overview
        </button>

        {/* Action buttons row - these are the colored tabs */}
        <div className="flex items-center space-x-2 ml-4">
          <button 
            onClick={() => handleTabClick('abc')}
            className={`px-3 py-1.5 rounded text-sm font-medium ${getTabColor('green', tabs.find(t => t.id === 'abc')?.isActive)}`}
          >
            ABC
          </button>
          
          <button 
            onClick={() => handleTabClick('answer-question')}
            className={`px-3 py-1.5 rounded text-sm font-medium ${getTabColor('purple', tabs.find(t => t.id === 'answer-question')?.isActive)}`}
          >
            Answer a question
          </button>
          
          <button 
            onClick={() => handleTabClick('extract')}
            className={`px-3 py-1.5 rounded text-sm font-medium ${getTabColor('orange', tabs.find(t => t.id === 'extract')?.isActive)}`}
          >
            Extract
          </button>

          <button 
            onClick={handleAddTab}
            className="w-8 h-8 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TabBar;
