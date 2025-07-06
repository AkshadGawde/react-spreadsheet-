import React, { useState, useCallback, useRef, useEffect } from "react";
import { SpreadsheetRow, SelectedCell } from "../types";
import { sampleData } from "../data/mockData";
import DataGridHeader from "./DataGridHeader";
import DataGridBody from "./DataGridBody";

const DataGrid: React.FC = () => {
  const [data] = useState<SpreadsheetRow[]>(sampleData);
  const [selectedCell, setSelectedCell] = useState<SelectedCell | null>(null);
  // const [editingCell, setEditingCell] = useState<SelectedCell | null>(null);

  // Column resizing state
  const [colWidths, setColWidths] = useState<number[]>([
    48, 300, 120, 120, 140, 160, 140, 100, 120, 120,
  ]);
  const resizingCol = useRef<number | null>(null);
  const startX = useRef<number>(0);
  const startWidth = useRef<number>(0);

  // --- ARROW KEYBOARD NAVIGATION LOGIC START ---
  const columns = [
    { key: "index", label: "#", width: "48px", unselectable: true },
    { key: "jobRequest", label: "Job Request", width: "300px" },
    { key: "submitted", label: "Submitted", width: "120px" },
    { key: "status", label: "Status", width: "120px" },
    { key: "submitter", label: "Submitter", width: "140px" },
    { key: "url", label: "URL", width: "160px" },
    { key: "assigned", label: "Assigned", width: "140px" },
    { key: "priority", label: "Priority", width: "100px" },
    { key: "dueDate", label: "Due Date", width: "120px" },
    { key: "estValue", label: "Est. Value", width: "120px" },
  ];
  const totalRows = data.length + 20;
  const totalCols = columns.length;
  const cellRefs = useRef<(HTMLTableCellElement | null)[][]>([]);

  // Column resize handlers
  const handleResizeMouseDown = (e: React.MouseEvent, colIndex: number) => {
    e.preventDefault();
    resizingCol.current = colIndex;
    startX.current = e.clientX;
    startWidth.current = colWidths[colIndex];
    document.addEventListener("mousemove", handleResizeMouseMove);
    document.addEventListener("mouseup", handleResizeMouseUp);
  };

  const handleResizeMouseMove = (e: MouseEvent) => {
    if (resizingCol.current === null) return;
    const delta = e.clientX - startX.current;
    setColWidths((widths) => {
      const newWidths = [...widths];
      newWidths[resizingCol.current!] = Math.max(
        60,
        startWidth.current + delta,
      );
      return newWidths;
    });
  };

  const handleResizeMouseUp = () => {
    resizingCol.current = null;
    document.removeEventListener("mousemove", handleResizeMouseMove);
    document.removeEventListener("mouseup", handleResizeMouseUp);
  };

  useEffect(() => {
    cellRefs.current = Array.from({ length: totalRows }, () =>
      Array(totalCols).fill(null),
    );
  }, [data.length]);
  useEffect(() => {
    if (selectedCell) {
      const cell = cellRefs.current[selectedCell.row]?.[selectedCell.column];
      if (cell) {
        cell.focus({ preventScroll: true });
        cell.scrollIntoView({ block: "nearest", inline: "nearest" });
      }
    }
  }, [selectedCell]);
  const handleGridKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLDivElement>) => {
      if (!selectedCell) return;
      let { row, column } = selectedCell;
      if (e.key === "ArrowDown") row = Math.min(row + 1, totalRows - 1);
      else if (e.key === "ArrowUp") row = Math.max(row - 1, 0);
      else if (e.key === "ArrowRight") {
        do { column = Math.min(column + 1, totalCols - 1); } while (columns[column]?.unselectable && column < totalCols - 1);
      }
      else if (e.key === "ArrowLeft") {
        do { column = Math.max(column - 1, 0); } while (columns[column]?.unselectable && column > 0);
      }
      else return;
      if (columns[column]?.unselectable) return;
      e.preventDefault();
      setSelectedCell({ row, column });
    },
    [selectedCell, totalRows, totalCols, columns],
  );
  // --- ARROW KEYBOARD NAVIGATION LOGIC END ---

  const handleCellClick = useCallback((row: number, column: number) => {
    if (columns[column]?.unselectable) return;
    setSelectedCell({ row, column });
    console.log(`Cell clicked: row ${row}, column ${column}`);
  }, [columns]);

  const handleCellDoubleClick = useCallback((row: number, column: number) => {
    if (columns[column]?.unselectable) return;
    // setEditingCell({ row, column });
    console.log(`Cell editing: row ${row}, column ${column}`);
  }, [columns]);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "In-process":
        return "bg-yellow-100 text-yellow-800 border border-yellow-200";
      case "Need to start":
        return "bg-blue-100 text-blue-800 border border-blue-200";
      case "Complete":
        return "bg-green-100 text-green-800 border border-green-200";
      case "Blocked":
        return "bg-red-100 text-red-800 border border-red-200";
      default:
        return "bg-gray-100 text-gray-800 border border-gray-200";
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case "High":
        return "text-red-600 font-medium";
      case "Medium":
        return "text-yellow-600 font-medium";
      case "Low":
        return "text-blue-600 font-medium";
      default:
        return "text-gray-600 font-medium";
    }
  };

  const handleStatusClick = (rowId: number, currentStatus: string) => {
    console.log(`Status clicked for row ${rowId}: ${currentStatus}`);
  };

  const handlePriorityClick = (rowId: number, currentPriority: string) => {
    console.log(`Priority clicked for row ${rowId}: ${currentPriority}`);
  };

  const handleUrlClick = (url: string) => {
    console.log(`URL clicked: ${url}`);
  };

  return (
    <div
      className="flex flex-col h-full bg-white rounded-2xl shadow-lg border border-gray-200 p-4 min-w-[1200px] max-w-full overflow-x-auto"
      tabIndex={0}
      onKeyDown={handleGridKeyDown}
      style={{ outline: "none" }}
    >
      {/* Spreadsheet container */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-separate border-spacing-0 min-w-[1200px] bg-white rounded-xl shadow-sm">
          {/* Header */}
          <DataGridHeader
            colWidths={colWidths}
            handleResizeMouseDown={handleResizeMouseDown}
          />
          {/* Body */}
          <DataGridBody
            data={data}
            columns={columns}
            colWidths={colWidths}
            selectedCell={selectedCell}
            cellRefs={cellRefs}
            handleCellClick={handleCellClick}
            handleCellDoubleClick={handleCellDoubleClick}
            getStatusBadge={getStatusBadge}
            getPriorityBadge={getPriorityBadge}
            handleStatusClick={handleStatusClick}
            handlePriorityClick={handlePriorityClick}
            handleUrlClick={handleUrlClick}
          />
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
