import React from "react";
import Header from "./Header";
import TabBar from "./TabBar";
import DataGrid from "./DataGrid";
import Footer from "./Footer";

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
      <Footer />

      {/* Optional: Add a modal or drawer for additional actions */}
      {/* <ActionModal /> */}
    </div>
  );
};

export default SpreadsheetView;
