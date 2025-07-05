import React, { useState } from "react";
import { BottomTab } from "../types";
import { bottomTabs } from "../data/mockData";

const BottomTabs: React.FC = () => {
  const [tabs, setTabs] = useState<BottomTab[]>(bottomTabs);

  const handleTabClick = (tabId: string) => {
    setTabs(
      tabs.map((tab) => ({
        ...tab,
        isActive: tab.id === tabId,
      })),
    );
    console.log("Bottom tab clicked:", tabId);
  };

  const handleAddTab = () => {
    console.log("Add bottom tab clicked");
  };

  return (
    <div className="border-t border-gray-200 bg-white">
      <div className="flex items-center px-4 py-2">
        <div className="flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => handleTabClick(tab.id)}
              className={`px-3 py-1.5 text-sm font-medium rounded-t border-t border-l border-r ${
                tab.isActive
                  ? "bg-white text-gray-900 border-gray-300 -mb-px"
                  : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
              }`}
            >
              {tab.label}
              {tab.count && (
                <span className="ml-2 bg-gray-200 text-gray-600 text-xs px-2 py-0.5 rounded-full">
                  {tab.count}
                </span>
              )}
            </button>
          ))}

          <button
            onClick={handleAddTab}
            className="w-7 h-7 rounded bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600 ml-2"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 4v16m8-8H4"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BottomTabs;
