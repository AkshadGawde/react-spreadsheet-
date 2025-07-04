import React, { useState, useCallback } from 'react';
import { SpreadsheetRow, SelectedCell } from '../types';
import { sampleData } from '../data/mockData';

const DataGrid: React.FC = () => {
  const [data] = useState<SpreadsheetRow[]>(sampleData);
  const [selectedCell, setSelectedCell] = useState<SelectedCell | null>(null);
  const [editingCell, setEditingCell] = useState<SelectedCell | null>(null);

  const handleCellClick = useCallback((row: number, column: number) => {
    setSelectedCell({ row, column });
    console.log(`Cell clicked: row ${row}, column ${column}`);
  }, []);

  const handleCellDoubleClick = useCallback((row: number, column: number) => {
    setEditingCell({ row, column });
    console.log(`Cell editing: row ${row}, column ${column}`);
  }, []);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'In-process':
        return 'bg-yellow-100 text-yellow-800 border border-yellow-200';
      case 'Need to start':
        return 'bg-blue-100 text-blue-800 border border-blue-200';
      case 'Complete':
        return 'bg-green-100 text-green-800 border border-green-200';
      case 'Blocked':
        return 'bg-red-100 text-red-800 border border-red-200';
      default:
        return 'bg-gray-100 text-gray-800 border border-gray-200';
    }
  };

  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'text-red-600 font-medium';
      case 'Medium':
        return 'text-yellow-600 font-medium';
      case 'Low':
        return 'text-blue-600 font-medium';
      default:
        return 'text-gray-600 font-medium';
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

  const columns = [
    { key: 'index', label: '#', width: '60px' },
    { key: 'jobRequest', label: 'Job Request', width: '300px' },
    { key: 'submitted', label: 'Submitted', width: '120px' },
    { key: 'status', label: 'Status', width: '120px' },
    { key: 'submitter', label: 'Submitter', width: '140px' },
    { key: 'url', label: 'URL', width: '160px' },
    { key: 'assigned', label: 'Assigned', width: '140px' },
    { key: 'priority', label: 'Priority', width: '100px' },
    { key: 'dueDate', label: 'Due Date', width: '120px' },
    { key: 'estValue', label: 'Est. Value', width: '120px' },
  ];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Spreadsheet container */}
      <div className="flex-1 overflow-auto">
        <table className="w-full border-collapse">
          {/* Header */}
          <thead className="bg-gray-50 sticky top-0">
            <tr>
              {columns.map((column, index) => (
                <th 
                  key={column.key}
                  className="border border-gray-200 px-3 py-2 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                  style={{ width: column.width, minWidth: column.width }}
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          
          {/* Body */}
          <tbody className="bg-white">
            {data.map((row, rowIndex) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {/* Index */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 0 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 0)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 0)}
                >
                  {row.id}
                </td>
                
                {/* Job Request */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 1 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 1)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 1)}
                >
                  {row.jobRequest}
                </td>
                
                {/* Submitted */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 2 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 2)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 2)}
                >
                  {row.submitted}
                </td>
                
                {/* Status */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 3 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 3)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 3)}
                >
                  <button
                    onClick={() => handleStatusClick(row.id, row.status)}
                    className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusBadge(row.status)}`}
                  >
                    {row.status}
                  </button>
                </td>
                
                {/* Submitter */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 4 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 4)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 4)}
                >
                  {row.submitter}
                </td>
                
                {/* URL */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 5 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 5)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 5)}
                >
                  <button
                    onClick={() => handleUrlClick(row.url)}
                    className="text-blue-600 hover:text-blue-800 underline"
                  >
                    {row.url}
                  </button>
                </td>
                
                {/* Assigned */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 6 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 6)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 6)}
                >
                  {row.assigned}
                </td>
                
                {/* Priority */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 7 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 7)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 7)}
                >
                  <button
                    onClick={() => handlePriorityClick(row.id, row.priority)}
                    className={`text-sm ${getPriorityBadge(row.priority)}`}
                  >
                    {row.priority}
                  </button>
                </td>
                
                {/* Due Date */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 8 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 8)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 8)}
                >
                  {row.dueDate}
                </td>
                
                {/* Est. Value */}
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 9 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 9)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 9)}
                >
                  {row.estValue}
                </td>
              </tr>
            ))}
            
            {/* Empty rows for spreadsheet feel */}
            {Array.from({ length: 20 }, (_, index) => (
              <tr key={`empty-${index}`} className="hover:bg-gray-50">
                {columns.map((_, colIndex) => (
                  <td 
                    key={colIndex}
                    className={`border border-gray-200 px-3 py-2 h-10 ${
                      selectedCell?.row === data.length + index && selectedCell?.column === colIndex 
                        ? 'bg-blue-100 ring-2 ring-blue-500' 
                        : ''
                    }`}
                    onClick={() => handleCellClick(data.length + index, colIndex)}
                    onDoubleClick={() => handleCellDoubleClick(data.length + index, colIndex)}
                  >
                    {colIndex === 0 ? data.length + index + 1 : ''}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
