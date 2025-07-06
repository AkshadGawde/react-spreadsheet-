import React from "react";
import DataGridCell from "./DataGridCell";

interface DataGridRowProps {
  row: any;
  rowIndex: number;
  columns: any[];
  colWidths: number[];
  selectedCell: any;
  cellRefs: React.MutableRefObject<(HTMLTableCellElement | null)[][]>;
  handleCellClick: (row: number, column: number) => void;
  handleCellDoubleClick: (row: number, column: number) => void;
  getStatusBadge?: (status: string) => string;
  getPriorityBadge?: (priority: string) => string;
  handleStatusClick?: (rowId: number, currentStatus: string) => void;
  handlePriorityClick?: (rowId: number, currentPriority: string) => void;
  handleUrlClick?: (url: string) => void;
  editingCell?: { row: number; column: number } | null;
  onCellValueChange?: (row: number, column: number, newValue: string) => void;
}

const DataGridRow: React.FC<DataGridRowProps> = ({
  row,
  rowIndex,
  columns,
  colWidths,
  selectedCell,
  cellRefs,
  handleCellClick,
  handleCellDoubleClick,
  getStatusBadge,
  getPriorityBadge,
  handleStatusClick,
  handlePriorityClick,
  handleUrlClick,
  editingCell,
  onCellValueChange,
}) => {
  // Render empty row if row is empty (for spreadsheet feel)
  if (!row || Object.keys(row).length === 0) {
    return (
      <tr className="hover:bg-gray-50">
        {columns.map((_, colIndex) => (
          <td
            ref={(el) => {
              cellRefs.current[rowIndex] = cellRefs.current[rowIndex] || [];
              cellRefs.current[rowIndex][colIndex] = el;
            }}
            tabIndex={-1}
            key={colIndex}
            className={`border border-gray-200 px-3 py-2 h-10 text-center ${
              selectedCell?.row === rowIndex &&
              selectedCell?.column === colIndex
                ? "bg-blue-100 ring-2 ring-blue-500"
                : ""
            }`}
            style={{ width: colWidths[colIndex], minWidth: 60 }}
            onClick={() => handleCellClick(rowIndex, colIndex)}
            onDoubleClick={() => handleCellDoubleClick(rowIndex, colIndex)}
          >
            {colIndex === 0 ? rowIndex + 1 : ""}
          </td>
        ))}
        {/* Extra empty cell for '+' column */}
        <td className="border border-gray-200 px-3 py-2 h-10"></td>
      </tr>
    );
  }
  // Render data row
  return (
    <tr className="hover:bg-gray-50">
      {/* Index */}
      <DataGridCell
        refEl={(el) => {
          cellRefs.current[rowIndex] = cellRefs.current[rowIndex] || [];
          cellRefs.current[rowIndex][0] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-sm text-center text-gray-900 ${
          selectedCell?.row === rowIndex && selectedCell?.column === 0
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[0], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 0)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 0)}
        value={row.id}
        isEditing={editingCell?.row === rowIndex && editingCell?.column === 0}
        onValueChange={(val) =>
          onCellValueChange && onCellValueChange(rowIndex, 0, val)
        }
      />
      {/* Job Request */}
      <DataGridCell
        refEl={(el) => {
          cellRefs.current[rowIndex][1] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
          selectedCell?.row === rowIndex && selectedCell?.column === 1
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[1], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 1)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 1)}
        value={row.jobRequest}
        isEditing={editingCell?.row === rowIndex && editingCell?.column === 1}
        onValueChange={(val) =>
          onCellValueChange && onCellValueChange(rowIndex, 1, val)
        }
      />
      {/* Submitted */}
      <DataGridCell
        refEl={(el) => {
          cellRefs.current[rowIndex][2] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-right text-sm text-gray-900 ${
          selectedCell?.row === rowIndex && selectedCell?.column === 2
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[2], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 2)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 2)}
        value={row.submitted}
        isEditing={editingCell?.row === rowIndex && editingCell?.column === 2}
        onValueChange={(val) =>
          onCellValueChange && onCellValueChange(rowIndex, 2, val)
        }
      />
      {/* Status */}
      <td
        ref={(el) => {
          cellRefs.current[rowIndex][3] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-center text-sm ${
          selectedCell?.row === rowIndex && selectedCell?.column === 3
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[3], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 3)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 3)}
      >
        {getStatusBadge && handleStatusClick ? (
          <button
            onClick={() => handleStatusClick(row.id, row.status)}
            className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(
              row.status,
            )}`}
          >
            {row.status}
          </button>
        ) : null}
      </td>
      {/* Submitter */}
      <DataGridCell
        refEl={(el) => {
          cellRefs.current[rowIndex][4] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-left text-sm text-gray-900 ${
          selectedCell?.row === rowIndex && selectedCell?.column === 4
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        onClick={() => handleCellClick(rowIndex, 4)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 4)}
        value={row.submitter}
        isEditing={editingCell?.row === rowIndex && editingCell?.column === 4}
        onValueChange={(val) =>
          onCellValueChange && onCellValueChange(rowIndex, 4, val)
        }
      />
      {/* URL */}
      <td
        ref={(el) => {
          cellRefs.current[rowIndex][5] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-sm ${
          selectedCell?.row === rowIndex && selectedCell?.column === 5
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[5], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 5)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 5)}
      >
        {handleUrlClick ? (
          <button
            onClick={() => handleUrlClick(row.url)}
            className="text-black underline"
          >
            {row.url}
          </button>
        ) : null}
      </td>
      {/* Assigned */}
      <DataGridCell
        refEl={(el) => {
          cellRefs.current[rowIndex][6] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
          selectedCell?.row === rowIndex && selectedCell?.column === 6
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[6], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 6)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 6)}
        value={row.assigned}
        isEditing={editingCell?.row === rowIndex && editingCell?.column === 6}
        onValueChange={(val) =>
          onCellValueChange && onCellValueChange(rowIndex, 6, val)
        }
      />
      {/* Priority */}
      <td
        ref={(el) => {
          cellRefs.current[rowIndex][7] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-center text-sm ${
          selectedCell?.row === rowIndex && selectedCell?.column === 7
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[7], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 7)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 7)}
      >
        {getPriorityBadge && handlePriorityClick ? (
          <button
            onClick={() => handlePriorityClick(row.id, row.priority)}
            className={`text-sm ${getPriorityBadge(row.priority)}`}
          >
            {row.priority}
          </button>
        ) : null}
      </td>
      {/* Due Date */}
      <DataGridCell
        refEl={(el) => {
          cellRefs.current[rowIndex][8] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-right text-sm text-gray-900 ${
          selectedCell?.row === rowIndex && selectedCell?.column === 8
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[8], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 8)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 8)}
        value={row.dueDate}
        isEditing={editingCell?.row === rowIndex && editingCell?.column === 8}
        onValueChange={(val) =>
          onCellValueChange && onCellValueChange(rowIndex, 8, val)
        }
      />
      {/* Est. Value */}
      <td
        ref={(el) => {
          cellRefs.current[rowIndex][9] = el;
        }}
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-right text-sm text-gray-900 ${
          selectedCell?.row === rowIndex && selectedCell?.column === 9
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
        style={{ width: colWidths[9], minWidth: 60 }}
        onClick={() => handleCellClick(rowIndex, 9)}
        onDoubleClick={() => handleCellDoubleClick(rowIndex, 9)}
      >
        <div className="flex items-center justify-end space-x-1">
          <span>{row.estValue}</span>
          <svg
            width="7"
            height="8"
            viewBox="0 0 7 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.59653 8L0.768531 5.012V4.04H2.86853C3.29253 4.04 3.63253 3.948 3.88853 3.764C4.15253 3.58 4.32053 3.312 4.39253 2.96H0.768531V2.06H4.39253C4.32053 1.708 4.15253 1.444 3.88853 1.268C3.63253 1.084 3.29253 0.991999 2.86853 0.991999L0.768531 0.98V0.0799997H6.62453V1.004L4.71653 0.991999C4.90053 1.064 5.05253 1.196 5.17253 1.388C5.30053 1.58 5.38853 1.804 5.43653 2.06H6.62453V2.96H5.44853C5.40053 3.328 5.26853 3.656 5.05253 3.944C4.84453 4.232 4.57253 4.46 4.23653 4.628C3.90053 4.796 3.50853 4.884 3.06053 4.892H2.26853L6.37253 8H4.59653Z"
              fill="#AFAFAF"
            />
          </svg>
        </div>
      </td>
      {/* Extra empty cell for '+' column */}
      <td
        tabIndex={-1}
        className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
          selectedCell?.row === rowIndex && selectedCell?.column === 9
            ? "bg-blue-100 ring-2 ring-blue-500"
            : ""
        }`}
      ></td>
    </tr>
  );
};

export default DataGridRow;
