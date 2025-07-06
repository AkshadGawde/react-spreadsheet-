import React, { useState } from "react";
import panelIcon from "../assets/panel0.svg";
import chevronIcon from "../assets/chevron0.svg";
import moreIcon from "../assets/more0.svg";
import alertIcon from "../assets/alert0.svg";
import profileImage from "../assets/ellipse-10.png";

const Header: React.FC = () => {
  const [searchValue, setSearchValue] = useState("");

  const handleSearch = (value: string) => {
    setSearchValue(value);
    console.log("Search query:", value);
  };

  const handleNotificationClick = () => {
    console.log("Notifications clicked");
  };

  const handleProfileClick = () => {
    console.log("Profile clicked");
  };

  return (
    <header
      className="flex items-center justify-between bg-white border-b border-[#eeeeee] overflow-hidden relative flex-shrink-0"
      style={{
        padding: "8px 16px",
        alignSelf: "stretch",
      }}
    >
      {/* Left side - Navigation breadcrumb */}
      <div className="flex items-center" style={{ gap: "16px" }}>
        <div
          className="flex-shrink-0 relative overflow-visible"
          style={{ width: "24px", height: "24px", aspectRatio: 1 }}
        >
          <img src={panelIcon} alt="Panel" className="w-full h-full" />
        </div>
        <div className="flex items-center" style={{ gap: "4px" }}>
          <div className="flex items-center" style={{ gap: "8px" }}>
            <span
              className="cursor-pointer text-left font-medium"
              style={{
                color: "#afafaf",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 500,
                fontFamily: "WorkSans-Medium, sans-serif",
              }}
            >
              Workspace
            </span>
            <div
              className="flex-shrink-0 relative overflow-visible"
              style={{ width: "12px", height: "12px", aspectRatio: 1 }}
            >
              <img src={chevronIcon} alt="Chevron" className="w-full h-full" />
            </div>
            <span
              className="cursor-pointer text-left font-medium"
              style={{
                color: "#afafaf",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 500,
                fontFamily: "WorkSans-Medium, sans-serif",
              }}
            >
              Folder 2
            </span>
            <div
              className="flex-shrink-0 relative overflow-visible"
              style={{ width: "12px", height: "12px", aspectRatio: 1 }}
            >
              <img src={chevronIcon} alt="Chevron" className="w-full h-full" />
            </div>
            <span
              className="text-left font-medium"
              style={{
                color: "#121212",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 500,
                fontFamily: "WorkSans-Medium, sans-serif",
              }}
            >
              Spreadsheet 3
            </span>
          </div>
          <div
            className="flex items-center justify-center rounded cursor-pointer"
            style={{
              width: "24px",
              height: "24px",
              gap: "8px",
              borderRadius: "4px",
            }}
          >
            <img
              src={moreIcon}
              alt="More options"
              style={{ width: "20px", height: "20px" }}
            />
          </div>
        </div>
      </div>

      {/* Right side - Search and user controls */}
      <div className="flex items-center" style={{ gap: "4px" }}>
        {/* Search */}
        <div
          className="flex items-center flex-shrink-0 relative overflow-hidden"
          style={{
            background: "#f6f6f6",
            borderRadius: "6px",
            border: "1px solid transparent",
            padding: "8px 12px",
            gap: "8px",
          }}
        >
          {/* SVG before input */}
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M14.4732 14.4733C14.2132 14.7333 13.7866 14.7333 13.5266 14.4733L11.3666 12.3067C11.7132 12.0267 12.0266 11.7133 12.3066 11.3667L14.4732 13.5267C14.7332 13.7867 14.7332 14.2133 14.4732 14.4733Z"
              fill="#AFAFAF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M7.50004 12.3333C10.1694 12.3333 12.3334 10.1694 12.3334 7.5C12.3334 4.83062 10.1694 2.66667 7.50004 2.66667C4.83066 2.66667 2.66671 4.83062 2.66671 7.5C2.66671 10.1694 4.83066 12.3333 7.50004 12.3333ZM7.50004 13.6667C10.9058 13.6667 13.6667 10.9058 13.6667 7.5C13.6667 4.09424 10.9058 1.33333 7.50004 1.33333C4.09428 1.33333 1.33337 4.09424 1.33337 7.5C1.33337 10.9058 4.09428 13.6667 7.50004 13.6667Z"
              fill="#AFAFAF"
            />
          </svg>

          {/* Input box */}
          <input
            className="bg-transparent border-none outline-none text-left"
            style={{
              color: searchValue ? "#121212" : "#757575",
              fontSize: "12px",
              lineHeight: "16px",
              fontWeight: 400,
              fontFamily: "WorkSans-Regular, sans-serif",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              width: "100%",
            }}
            type="text"
            placeholder="Search within sheet"
            value={searchValue}
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        {/* Notification bell */}
        <div
          className="relative flex items-center flex-shrink-0 cursor-pointer"
          style={{
            background: "#ffffff",
            borderRadius: "8px",
            padding: "8px",
            gap: "12px",
          }}
          onClick={handleNotificationClick}
        >
          <div
            className="flex-shrink-0 relative overflow-visible"
            style={{ width: "24px", height: "24px", aspectRatio: 1 }}
          >
            <img
              src={alertIcon}
              alt="Notifications"
              className="w-full h-full"
            />
          </div>
          <div
            className="absolute flex items-center justify-center"
            style={{
              background: "#4b6a4f",
              borderRadius: "100px",
              border: "2px solid #ffffff",
              width: "16px",
              height: "16px",
              right: "2px",
              top: "2px",
            }}
          >
            <span
              className="text-center"
              style={{
                color: "#f6f6f6",
                fontSize: "10px",
                lineHeight: "16px",
                fontWeight: 500,
                fontFamily: "WorkSans-Medium, sans-serif",
              }}
            >
              2
            </span>
          </div>
        </div>

        {/* User profile */}
        <div
          className="flex items-center flex-shrink-0 relative cursor-pointer"
          style={{
            background: "#ffffff",
            borderRadius: "8px",
            padding: "6px 12px 6px 8px",
            gap: "8px",
          }}
          onClick={handleProfileClick}
        >
          <img
            src={profileImage}
            alt="Profile"
            className="flex-shrink-0 relative object-cover"
            style={{
              borderRadius: "50%",
              width: "28px",
              height: "28px",
              aspectRatio: 1,
            }}
          />
          <div
            className="flex flex-col flex-shrink-0 relative"
            style={{ maxWidth: "120px" }}
          >
            <span
              className="text-left"
              style={{
                color: "#121212",
                fontSize: "12px",
                lineHeight: "16px",
                fontWeight: 400,
                fontFamily: "WorkSans-Regular, sans-serif",
              }}
            >
              John Doe
            </span>
            <span
              className="text-left"
              style={{
                margin: "-2px 0 0 0",
                color: "#757575",
                fontSize: "10px",
                lineHeight: "12px",
                fontWeight: 400,
                fontFamily: "WorkSans-Regular, sans-serif",
                alignSelf: "stretch",
                textOverflow: "ellipsis",
                overflow: "hidden",
                whiteSpace: "nowrap",
              }}
            >
              john.doe@companyname.com
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
