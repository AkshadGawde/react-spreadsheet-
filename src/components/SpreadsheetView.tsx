import React from 'react';
import Header from './Header';
import TabBar from './TabBar';
import DataGrid from './DataGrid';

const SpreadsheetView: React.FC = () => {
  return (
    <div className="flex flex-col h-screen bg-white">
      {/* Top navigation and controls */}
      <Header />
      
      {/* Tab bar with main tabs and action buttons */}
      <TabBar />
      
      {/* Main spreadsheet area */}
      <div className="flex-1 overflow-hidden">
        <DataGrid />
      </div>
    </div>
  );
};

export default SpreadsheetView;