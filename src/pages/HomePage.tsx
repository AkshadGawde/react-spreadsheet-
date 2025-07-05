import React from "react";
import Spreadsheet from "../components/Spreadsheet";

import Toolbar from "../components/Toolbar";

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen h-screen flex flex-col bg-gray-50 p-4">
      <Toolbar />
      <div className="flex-1 bg-white rounded-lg shadow-[0_1px_3px_rgba(0,0,0,0.1)] overflow-hidden">
        <Spreadsheet />
      </div>
    </div>
  );
};

export default HomePage;
