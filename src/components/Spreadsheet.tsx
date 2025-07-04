/* global console, document */
import React, { useState } from 'react';

// Define data types for our table
interface SpreadsheetRow {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'in-process' | 'need-to-start' | 'complete' | 'blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'high' | 'medium' | 'low';
  dueDate: string;
  estValue: number;
}

const mockData: SpreadsheetRow[] = [
  {
    id: 1,
    jobRequest: 'Launch social media campaign for product',
    submitted: '15-11-2024',
    status: 'in-process',
    submitter: 'Aisha Patel',
    url: 'www.aishapatel.com',
    assigned: 'Sophie Choudhury',
    priority: 'medium',
    dueDate: '20-11-2024',
    estValue: 6200000
  },
  {
    id: 2,
    jobRequest: 'Update press kit for company redesign',
    submitted: '28-10-2024',
    status: 'need-to-start',
    submitter: 'Irfan Khan',
    url: 'www.irfankhan.com',
    assigned: 'Tejas Pandey',
    priority: 'high',
    dueDate: '30-10-2024',
    estValue: 3500000
  },
  {
    id: 3,
    jobRequest: 'Finalize user testing feedback for app',
    submitted: '05-12-2024',
    status: 'in-process',
    submitter: 'Mark Johnson',
    url: 'www.markjohnson.com',
    assigned: 'Rachel Lee',
    priority: 'medium',
    dueDate: '10-12-2024',
    estValue: 4750000
  },
  {
    id: 4,
    jobRequest: 'Design new features for the website',
    submitted: '10-01-2025',
    status: 'complete',
    submitter: 'Emily Green',
    url: 'www.emilygreen.com',
    assigned: 'Tom Wright',
    priority: 'low',
    dueDate: '15-01-2025',
    estValue: 5900000
  },
  {
    id: 5,
    jobRequest: 'Prepare financial report for Q4',
    submitted: '25-01-2025',
    status: 'blocked',
    submitter: 'Jessica Brown',
    url: 'www.jessicabrown.com',
    assigned: 'Kevin Smith',
    priority: 'low',
    dueDate: '30-01-2025',
    estValue: 2800000
  }
];

const Spreadsheet: React.FC = () => {
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);
  const [selectedCell, setSelectedCell] = useState<{ row: number, col: number } | null>(null);
  const [columnWidths, setColumnWidths] = useState<Record<number, number>>({
    0: 48,  // Row numbers
    1: 320, // Job Request
    2: 128, // Submitted
    3: 128, // Status
    4: 160, // Submitter
    5: 160, // URL
    6: 160, // Assigned
    7: 112, // Priority
    8: 112, // Due Date
    9: 112  // Est. Value
  });
  const [resizingCol, setResizingCol] = useState<number | null>(null);
  const [resizeStartX, setResizeStartX] = useState<number>(0);
  const [resizeStartWidth, setResizeStartWidth] = useState<number>(0);

  // Generate 20 empty rows for spreadsheet-like appearance
  const emptyRows = Array(20).fill(0).map((_, i) => i + mockData.length + 1);
  
  const getStatusClass = (status: SpreadsheetRow['status']) => {
    switch (status) {
      case 'in-process':
        return 'bg-yellow-100 text-yellow-800';
      case 'need-to-start':
        return 'bg-gray-100 text-gray-800';
      case 'complete':
        return 'bg-green-100 text-green-800';
      case 'blocked':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100';
    }
  };

  const getPriorityClass = (priority: SpreadsheetRow['priority']) => {
    switch (priority) {
      case 'high':
        return 'text-red-500 font-medium';
      case 'medium':
        return 'text-yellow-500 font-medium';
      case 'low':
        return 'text-blue-500 font-medium';
      default:
        return '';
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(value);
  };

  const handleRowClick = (id: number) => {
    console.log(`Row ${id} clicked`);
    setSelectedCell({ row: id, col: 0 });
  };

  const handleCellClick = (rowId: number, colIndex: number) => {
    setSelectedCell({ row: rowId, col: colIndex });
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!selectedCell) return;
    
    const { row, col } = selectedCell;
    const totalRows = mockData.length + emptyRows.length;
    const totalCols = 10; // Number of columns in our table
    
    switch (e.key) {
      case 'ArrowUp':
        if (row > 1) {
          setSelectedCell({ row: row - 1, col });
        }
        break;
      case 'ArrowDown':
        if (row < totalRows) {
          setSelectedCell({ row: row + 1, col });
        }
        break;
      case 'ArrowLeft':
        if (col > 0) {
          setSelectedCell({ row, col: col - 1 });
        }
        break;
      case 'ArrowRight':
        if (col < totalCols - 1) {
          setSelectedCell({ row, col: col + 1 });
        }
        break;
      default:
        break;
    }
  };

  // Column resize handlers
  const handleResizeMouseDown = (e: React.MouseEvent, colIndex: number) => {
    e.preventDefault();
    setResizingCol(colIndex);
    setResizeStartX(e.clientX);
    setResizeStartWidth(columnWidths[colIndex] || 100);

    // Add event listeners for mousemove and mouseup
    document.addEventListener('mousemove', handleResizeMouseMove);
    document.addEventListener('mouseup', handleResizeMouseUp);
  };

  const handleResizeMouseMove = (e: MouseEvent) => {
    if (resizingCol === null) return;
    
    const delta = e.clientX - resizeStartX;
    const newWidth = Math.max(50, resizeStartWidth + delta); // Min width: 50px
    
    setColumnWidths(prev => ({
      ...prev,
      [resizingCol]: newWidth
    }));
  };

  const handleResizeMouseUp = () => {
    setResizingCol(null);
    document.removeEventListener('mousemove', handleResizeMouseMove);
    document.removeEventListener('mouseup', handleResizeMouseUp);
  };

  return (
    <div 
      className="flex-1 overflow-auto" 
      tabIndex={0}
      onKeyDown={handleKeyDown}
    >
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th style={{ width: `${columnWidths[0]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 0)}></div>
            </th>
            <th style={{ width: `${columnWidths[1]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <div className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Job Request</span>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 1)}></div>
            </th>
            <th style={{ width: `${columnWidths[2]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <div className="flex items-center">
                <span>Submitted</span>
                <span className="ml-1">▼</span>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 2)}></div>
            </th>
            <th style={{ width: `${columnWidths[3]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <div className="flex items-center">
                <span>Status</span>
                <span className="ml-1">▼</span>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 3)}></div>
            </th>
            <th style={{ width: `${columnWidths[4]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <div className="flex items-center">
                <span>Submitter</span>
                <span className="ml-1">▼</span>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 4)}></div>
            </th>
            <th style={{ width: `${columnWidths[5]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <span>URL</span>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 5)}></div>
            </th>
            <th style={{ width: `${columnWidths[6]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <div className="flex items-center">
                <span>Assigned</span>
                <span className="ml-1">▼</span>
              </div>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 6)}></div>
            </th>
            <th style={{ width: `${columnWidths[7]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <span>Priority</span>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 7)}></div>
            </th>
            <th style={{ width: `${columnWidths[8]}px` }} className="relative py-2 px-3 text-left text-xs font-medium text-gray-600 border-r border-gray-200">
              <span>Due Date</span>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 8)}></div>
            </th>
            <th style={{ width: `${columnWidths[9]}px` }} className="relative py-2 px-3 text-right text-xs font-medium text-gray-600">
              <span>Est. Value</span>
              <div className="absolute top-0 right-0 bottom-0 w-1 cursor-col-resize" onMouseDown={(e) => handleResizeMouseDown(e, 9)}></div>
            </th>
          </tr>
        </thead>
        <tbody>
          {mockData.map((row) => (
            <tr
              key={row.id}
              className={`border-t border-gray-100 hover:bg-blue-50 ${hoveredRow === row.id ? 'bg-blue-50' : ''} ${selectedCell?.row === row.id ? 'bg-blue-100' : ''}`}
              onMouseEnter={() => setHoveredRow(row.id)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => handleRowClick(row.id)}
            >
              <td 
                className={`py-2 px-3 text-sm text-gray-500 border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 0 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 0)}
              >
                {row.id}
              </td>
              <td 
                className={`py-2 px-3 text-sm font-medium text-gray-800 border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 1 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 1)}
              >
                {row.jobRequest}
              </td>
              <td 
                className={`py-2 px-3 text-sm text-gray-600 border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 2 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 2)}
              >
                {row.submitted}
              </td>
              <td 
                className={`py-2 px-3 text-xs border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 3 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 3)}
              >
                <span className={`px-2 py-1 rounded-sm ${getStatusClass(row.status)}`}>
                  {row.status.replace(/-/g, ' ')}
                </span>
              </td>
              <td 
                className={`py-2 px-3 text-sm text-gray-600 border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 4 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 4)}
              >
                {row.submitter}
              </td>
              <td 
                className={`py-2 px-3 text-sm text-blue-500 border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 5 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 5)}
              >
                <a href={`https://${row.url}`} target="_blank" rel="noopener noreferrer">
                  {row.url}
                </a>
              </td>
              <td 
                className={`py-2 px-3 text-sm text-gray-600 border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 6 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 6)}
              >
                {row.assigned}
              </td>
              <td 
                className={`py-2 px-3 text-sm ${getPriorityClass(row.priority)} border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 7 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 7)}
              >
                {row.priority.charAt(0).toUpperCase() + row.priority.slice(1)}
              </td>
              <td 
                className={`py-2 px-3 text-sm text-gray-600 border-r border-gray-200 ${selectedCell?.row === row.id && selectedCell?.col === 8 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 8)}
              >
                {row.dueDate}
              </td>
              <td 
                className={`py-2 px-3 text-sm text-gray-600 text-right ${selectedCell?.row === row.id && selectedCell?.col === 9 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(row.id, 9)}
              >
                {formatCurrency(row.estValue)}
              </td>
            </tr>
          ))}
          {emptyRows.map((rowNum) => (
            <tr 
              key={`empty-${rowNum}`} 
              className={`border-t border-gray-100 h-8 ${hoveredRow === rowNum ? 'bg-blue-50' : ''} ${selectedCell?.row === rowNum ? 'bg-blue-100' : ''}`}
              onMouseEnter={() => setHoveredRow(rowNum)}
              onMouseLeave={() => setHoveredRow(null)}
              onClick={() => handleRowClick(rowNum)}
            >
              <td 
                className={`py-2 px-3 text-sm text-gray-500 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 0 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 0)}
              >
                {rowNum}
              </td>
              <td 
                className={`py-2 px-3 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 1 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 1)}
              ></td>
              <td 
                className={`py-2 px-3 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 2 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 2)}
              ></td>
              <td 
                className={`py-2 px-3 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 3 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 3)}
              ></td>
              <td 
                className={`py-2 px-3 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 4 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 4)}
              ></td>
              <td 
                className={`py-2 px-3 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 5 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 5)}
              ></td>
              <td 
                className={`py-2 px-3 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 6 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 6)}
              ></td>
              <td 
                className={`py-2 px-3 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 7 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 7)}
              ></td>
              <td 
                className={`py-2 px-3 border-r border-gray-200 ${selectedCell?.row === rowNum && selectedCell?.col === 8 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 8)}
              ></td>
              <td 
                className={`py-2 px-3 ${selectedCell?.row === rowNum && selectedCell?.col === 9 ? 'bg-blue-200' : ''}`}
                onClick={() => handleCellClick(rowNum, 9)}
              ></td>
            </tr>
          ))}
        </tbody>
      </table>
      
      {/* Bottom tabs */}
      <div className="flex border-t border-gray-200 bg-gray-50">
        <div className="px-4 py-2 bg-gray-200 text-gray-800 font-medium text-sm">
          All Orders
        </div>
        <div className="px-4 py-2 text-gray-600 text-sm">
          Pending
        </div>
        <div className="px-4 py-2 text-gray-600 text-sm">
          Reviewed
        </div>
        <div className="px-4 py-2 text-gray-600 text-sm">
          Arrived
        </div>
        <button 
          onClick={() => console.log('Add new tab')} 
          className="px-4 py-2 text-gray-500 hover:bg-gray-200"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default Spreadsheet;
