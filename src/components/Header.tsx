import React, { useState } from 'react';

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleSearch = (value: string) => {
    setSearchValue(value);
    console.log('Search query:', value);
  };

  const handleNotificationClick = () => {
    console.log('Notifications clicked');
  };

  const handleProfileClick = () => {
    console.log('Profile clicked');
  };

  return (
    <header className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-white">
      {/* Left side - Navigation breadcrumb */}
      <div className="flex items-center">
        <div className="w-4 h-4 bg-gray-100 mr-3 flex items-center justify-center rounded">
          <span className="text-gray-600 text-xs">�</span>
        </div>
        <div className="text-sm flex items-center text-gray-600">
          <span className="hover:text-gray-800 cursor-pointer">Workspace</span>
          <span className="mx-2 text-gray-400">{'>'}</span>
          <span className="hover:text-gray-800 cursor-pointer">Folder 2</span>
          <span className="mx-2 text-gray-400">{'>'}</span>
          <span className="font-medium text-gray-800">Spreadsheet 3</span>
          <button className="ml-2 text-gray-400 hover:text-gray-600">
            <span>•••</span>
          </button>
        </div>
      </div>
      
      {/* Right side - Search and user controls */}
      <div className="flex items-center space-x-4">
        {/* Search */}
        <div className="relative">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <svg className="h-4 w-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
          <input
            className="pl-10 pr-4 py-2 rounded-md border border-gray-200 bg-gray-50 text-sm w-64 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            type="text"
            placeholder="Search within sheet"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>
        
        {/* Notification bell with badge */}
        <div className="relative">
          <button 
            onClick={handleNotificationClick}
            className="p-2 text-gray-500 hover:text-gray-700 relative"
          >
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-5-5V6a6 6 0 00-12 0v6l-5 5h5m7 0v1a3 3 0 01-6 0v-1m6 0H9" />
            </svg>
            <span className="absolute -top-1 -right-1 h-4 w-4 bg-green-800 text-white text-xs rounded-full flex items-center justify-center">
              2
            </span>
          </button>
        </div>
        
        {/* User profile */}
        <div className="flex items-center space-x-2">
  <button 
    onClick={handleProfileClick}
    className="h-8 w-8 rounded-full flex items-center justify-center text-white text-sm font-medium"
  >
    <img
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face&auto=format&q=80"
        alt="John Doe Profile"
        className="w-8 h-8 rounded-full mr-2 object-cover"
      />
    JD
  </button>

  <div className="flex flex-col hidden sm:flex">
    <span className="flex items-center text-sm text-gray-700">
      John Doe
    </span>
    <p className="text-xs text-right text-gray-500">john.doe...</p>
  </div>
</div>
      </div>
    </header>
  );
};

export default Header;
