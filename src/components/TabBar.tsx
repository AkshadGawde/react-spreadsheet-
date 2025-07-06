import React from "react";
import chevronDoubleIcon from "../assets/chevron-double0.svg";
import eyeIcon from "../assets/eye0.svg";
import arrowSortIcon from "../assets/arrow-sort0.svg";
import filterIcon from "../assets/filter0.svg";
import arrowAutofitIcon from "../assets/arrow-autofit0.svg";
import arrowDownloadIcon from "../assets/arrow-download0.svg";
import arrowUploadIcon from "../assets/arrow-upload0.svg";
import shareIcon from "../assets/share0.svg";
import arrowSplitIcon from "../assets/arrow-split0.svg";

const TabBar: React.FC = () => {
  return (
    <div
      className="flex items-center bg-white border-b border-[#eeeeee] relative flex-shrink-0"
      style={{
        padding: "6px 8px",
        gap: "8px",
        alignSelf: "stretch",
      }}
    >
      {/* Toolbar section */}
      <div
        className="flex items-center flex-shrink-0 relative"
        style={{
          background: "#ffffff",
          borderRadius: "4px",
          border: "1px solid transparent",
          padding: "8px",
          gap: "4px",
          justifyContent: "center",
        }}
      >
        <span
          className="text-left relative"
          style={{
            color: "#121212",
            fontSize: "14px",
            lineHeight: "20px",
            fontWeight: 400,
            fontFamily: "WorkSans-Regular, sans-serif",
          }}
        >
          Tool bar
        </span>
        <div
          className="flex-shrink-0 relative overflow-visible"
          style={{ width: "16px", height: "16px", aspectRatio: 1 }}
        >
          <img
            src={chevronDoubleIcon}
            alt="Chevron double"
            className="w-full h-full"
          />
        </div>
      </div>

      {/* Separator */}
      <div
        className="flex-shrink-0 relative"
        style={{
          background: "#eeeeee",
          width: "1px",
          height: "24px",
        }}
      />

      {/* Table controls block */}
      <div
        className="flex items-center relative flex-1"
        style={{
          gap: "4px",
          justifyContent: "flex-start",
        }}
      >
        {/* Hide fields button */}
        <button
          className="flex items-center flex-shrink-0 relative"
          style={{
            background: "#ffffff",
            borderRadius: "6px",
            padding: "8px 12px 8px 8px",
            gap: "4px",
            justifyContent: "flex-start",
          }}
          onClick={() => console.log("Hide fields clicked")}
        >
          <div
            className="flex-shrink-0 relative overflow-visible"
            style={{ width: "20px", height: "20px" }}
          >
            <img src={eyeIcon} alt="Eye" className="w-full h-full" />
          </div>
          <span
            className="text-left relative"
            style={{
              color: "#121212",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              fontFamily: "WorkSans-Regular, sans-serif",
            }}
          >
            Hide fields
          </span>
        </button>

        {/* Sort button */}
        <button
          className="flex items-center flex-shrink-0 relative"
          style={{
            background: "#ffffff",
            borderRadius: "6px",
            padding: "8px 12px 8px 8px",
            gap: "4px",
            justifyContent: "flex-start",
          }}
          onClick={() => console.log("Sort clicked")}
        >
          <div
            className="flex-shrink-0 relative overflow-visible"
            style={{ width: "20px", height: "20px" }}
          >
            <img src={arrowSortIcon} alt="Sort" className="w-full h-full" />
          </div>
          <span
            className="text-left relative"
            style={{
              color: "#121212",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              fontFamily: "WorkSans-Regular, sans-serif",
            }}
          >
            Sort
          </span>
        </button>

        {/* Filter button */}
        <button
          className="flex items-center flex-shrink-0 relative"
          style={{
            background: "#ffffff",
            borderRadius: "6px",
            padding: "8px 12px 8px 8px",
            gap: "4px",
            justifyContent: "flex-start",
          }}
          onClick={() => console.log("Filter clicked")}
        >
          <div
            className="flex-shrink-0 relative overflow-visible"
            style={{ width: "20px", height: "20px" }}
          >
            <img src={filterIcon} alt="Filter" className="w-full h-full" />
          </div>
          <span
            className="text-left relative"
            style={{
              color: "#121212",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              fontFamily: "WorkSans-Regular, sans-serif",
            }}
          >
            Filter
          </span>
        </button>

        {/* Autofit button */}
        <button
          className="flex items-center flex-shrink-0 relative"
          style={{
            background: "#ffffff",
            borderRadius: "6px",
            padding: "8px 12px 8px 8px",
            gap: "4px",
            justifyContent: "flex-start",
          }}
          onClick={() => console.log("Autofit clicked")}
        >
          <div
            className="flex-shrink-0 relative overflow-visible"
            style={{ width: "20px", height: "20px" }}
          >
            <img
              src={arrowAutofitIcon}
              alt="Autofit"
              className="w-full h-full"
            />
          </div>
          <span
            className="text-left relative"
            style={{
              color: "#121212",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 400,
              fontFamily: "WorkSans-Regular, sans-serif",
            }}
          >
            Autofit
          </span>
        </button>
      </div>

      {/* Actions right section */}
      <div
        className="flex items-center flex-shrink-0 relative"
        style={{
          gap: "8px",
          justifyContent: "flex-end",
        }}
      >
        {/* Controls */}
        <div
          className="flex flex-shrink-0 relative"
          style={{
            gap: "8px",
            alignItems: "flex-start",
            justifyContent: "flex-start",
          }}
        >
          {/* Import button */}
          <button
            className="flex items-center flex-shrink-0 relative"
            style={{
              background: "#ffffff",
              borderRadius: "6px",
              border: "1px solid #eeeeee",
              padding: "8px 12px 8px 8px",
              gap: "4px",
              justifyContent: "flex-start",
            }}
            onClick={() => console.log("Import clicked")}
          >
            <div
              className="flex-shrink-0 relative overflow-visible"
              style={{ width: "20px", height: "20px", aspectRatio: 1 }}
            >
              <img
                src={arrowDownloadIcon}
                alt="Import"
                className="w-full h-full"
              />
            </div>
            <span
              className="text-left relative"
              style={{
                color: "#545454",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                fontFamily: "WorkSans-Regular, sans-serif",
              }}
            >
              Import
            </span>
          </button>

          {/* Export button */}
          <button
            className="flex items-center flex-shrink-0 relative"
            style={{
              background: "#ffffff",
              borderRadius: "6px",
              border: "1px solid #eeeeee",
              padding: "8px 12px 8px 8px",
              gap: "4px",
              justifyContent: "flex-start",
            }}
            onClick={() => console.log("Export clicked")}
          >
            <div
              className="flex-shrink-0 relative overflow-visible"
              style={{ width: "20px", height: "20px" }}
            >
              <img
                src={arrowUploadIcon}
                alt="Export"
                className="w-full h-full"
              />
            </div>
            <span
              className="text-left relative"
              style={{
                color: "#545454",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                fontFamily: "WorkSans-Regular, sans-serif",
              }}
            >
              Export
            </span>
          </button>

          {/* Share button */}
          <button
            className="flex items-center flex-shrink-0 relative"
            style={{
              background: "#ffffff",
              borderRadius: "6px",
              border: "1px solid #eeeeee",
              padding: "8px 12px 8px 8px",
              gap: "4px",
              justifyContent: "flex-start",
            }}
            onClick={() => console.log("Share clicked")}
          >
            <div
              className="flex-shrink-0 relative overflow-visible"
              style={{ width: "20px", height: "20px" }}
            >
              <img src={shareIcon} alt="Share" className="w-full h-full" />
            </div>
            <span
              className="text-left relative"
              style={{
                color: "#545454",
                fontSize: "14px",
                lineHeight: "20px",
                fontWeight: 400,
                fontFamily: "WorkSans-Regular, sans-serif",
              }}
            >
              Share
            </span>
          </button>
        </div>

        {/* New Action button */}
        <button
          className="flex items-center flex-shrink-0 relative overflow-hidden"
          style={{
            background: "#4b6a4f",
            borderRadius: "6px",
            padding: "8px 24px",
            gap: "4px",
            justifyContent: "center",
          }}
          onClick={() => console.log("New Action clicked")}
        >
          <div
            className="flex-shrink-0 relative overflow-visible"
            style={{ width: "20px", height: "20px", aspectRatio: 1 }}
          >
            <img
              src={arrowSplitIcon}
              alt="New Action"
              className="w-full h-full"
            />
          </div>
          <span
            className="text-left relative"
            style={{
              color: "#ffffff",
              fontSize: "14px",
              lineHeight: "20px",
              fontWeight: 500,
              fontFamily: "WorkSans-Medium, sans-serif",
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
            }}
          >
            New Action
          </span>
        </button>
      </div>
    </div>
  );
};

export default TabBar;
