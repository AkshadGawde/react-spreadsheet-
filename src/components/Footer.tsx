import React from "react";
const Footer: React.FC = () => {
  const tabs = [
    { label: "All Orders", active: true },
    { label: "Pending", active: false },
    { label: "Reviewed", active: false },
    { label: "Arrived", active: false },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full bg-white border-t border-gray-200 z-50 shadow-sm">
      <div className="flex items-center px-6 py-0.5 gap-2">
        {tabs.map((tab, idx) => (
          <button
            key={tab.label}
            className={`px-4 py-2 text-sm font-semibold rounded-t-md focus:outline-none transition-colors duration-150 ${
              tab.active
                ? "bg-[#E6F0EA] text-green-900 border-b-2 border-green-700 shadow-sm"
                : "bg-transparent text-gray-500 hover:bg-gray-100"
            }`}
            style={{
              borderBottom: tab.active
                ? "3px solid #355C3A"
                : "3px solid transparent",
              marginRight: idx === tabs.length - 1 ? "0.5rem" : "0",
            }}
            onClick={() => console.log(`${tab.label} tab clicked`)}
          >
            {tab.label}
          </button>
        ))}
        <button
          className="w-7 h-7 flex items-center justify-center rounded-full text-gray-400 hover:bg-gray-100 text-xl text-center"
          onClick={() => console.log("Add tab clicked")}
        >
          <span className="text-2xl leading-none">+</span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
