import React from "react";
import DataGridRow from "./DataGridRow";

interface DataGridBodyProps {
  data: any[];
  columns: any[];
  colWidths: number[];
  selectedCell: any;
  cellRefs: React.MutableRefObject<(HTMLTableCellElement | null)[][]>;
  handleCellClick: (row: number, column: number) => void;
  handleCellDoubleClick: (row: number, column: number) => void;
  getStatusBadge: (status: string) => string;
  getPriorityBadge: (priority: string) => string;
  handleStatusClick: (rowId: number, currentStatus: string) => void;
  handlePriorityClick: (rowId: number, currentPriority: string) => void;
  handleUrlClick: (url: string) => void;
}

const DataGridBody: React.FC<DataGridBodyProps> = ({
  data,
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
}) => {
  return (
    <tbody className="bg-white">
      {data.map((row, rowIndex) => (
        <DataGridRow
          key={row.id}
          row={row}
          rowIndex={rowIndex}
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
      ))}
      {/* Empty rows for spreadsheet feel */}
      {Array.from({ length: 20 }, (_, index) => (
        <DataGridRow
          key={`empty-${index}`}
          row={{}}
          rowIndex={data.length + index}
          columns={columns}
          colWidths={colWidths}
          selectedCell={selectedCell}
          cellRefs={cellRefs}
          handleCellClick={handleCellClick}
          handleCellDoubleClick={handleCellDoubleClick}
        />
      ))}
    </tbody>
  );
};

export default DataGridBody;
