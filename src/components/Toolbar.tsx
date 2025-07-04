import React, { useState } from 'react';

const Toolbar: React.FC = () => {
  const [isToolbarExpanded, setIsToolbarExpanded] = useState(false);

  const handleToolbarToggle = () => {
    setIsToolbarExpanded(!isToolbarExpanded);
    console.log('Toolbar toggle:', !isToolbarExpanded);
  };

  const handleHideFields = () => {
    console.log('Hide fields clicked');
  };

  const handleSort = () => {
    console.log('Sort clicked');
  };

  const handleFilter = () => {
    console.log('Filter clicked');
  };

  const handleCellView = () => {
    console.log('Cell view clicked');
  };

  const handleImport = () => {
    console.log('Import clicked');
  };

  const handleExport = () => {
    console.log('Export clicked');
  };

  const handleShare = () => {
    console.log('Share clicked');
  };

  const handleNewAction = () => {
    console.log('New Action clicked');
  };

  return (
    <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 bg-white">
      <div className="flex items-center space-x-3">
        <button 
          onClick={handleToolbarToggle}
          className="flex items-center text-gray-600 text-sm hover:text-gray-800"
        >
          <span>Tool bar</span>
          <svg 
            className={`ml-1 w-3 h-3 transition-transform ${isToolbarExpanded ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        
        <button 
          onClick={handleHideFields}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L6.05 6.05M9.878 9.878a3 3 0 105.303 5.303m0 0L18.364 18.364M15.536 15.536L18.364 18.364" />
          </svg>
          Hide fields
        </button>
        
        <button 
          onClick={handleSort}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
          </svg>
          Sort
        </button>
        
        <button 
          onClick={handleFilter}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z" />
          </svg>
          Filter
        </button>
        
        <button 
          onClick={handleCellView}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          Cell view
        </button>
      </div>
      
      <div className="flex items-center space-x-3">
        <button 
          onClick={handleImport}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
          </svg>
          Import
        </button>
        
        <button 
          onClick={handleExport}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
          </svg>
          Export
        </button>
        
        <button 
          onClick={handleShare}
          className="flex items-center px-3 py-1.5 bg-white border border-gray-300 rounded text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          <svg className="mr-2 w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
          </svg>
          Share
        </button>
        
        <button 
          onClick={handleNewAction}
          className="flex items-center px-4 py-1.5 bg-green-600 text-white rounded text-sm font-medium hover:bg-green-700"
        >
          New Action
        </button>
      </div>
    </div>
  );
};

export default Toolbar;