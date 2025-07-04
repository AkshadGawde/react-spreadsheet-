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
          <thead>
            {/* Grouped header row */}
            <tr>
              <th className="bg-[#E5E5E5] border border-[#E3E5E8] px-3 py-2" style={{ width: '60px' }}></th>
              <th colSpan={5} className="bg-[#E5E5E5] border border-[#E3E5E8] px-3 py-2 text-left text-xs font-semibold text-[#3B3F4C] tracking-wide align-middle" style={{ minWidth: '840px' }}>
                <div className="flex items-center">
                  <span className="inline-flex items-center bg-white border border-[#D1D5DB] rounded px-2 py-1 text-sm font-normal text-[#3B3F4C] mr-2">
                    <svg width="16" height="16" fill="none" className="mr-1 text-blue-500" viewBox="0 0 16 16"><path d="M7.333 8.667 6 7.333m0 0 1.333-1.334M6 7.333h4.667A2 2 0 0 0 12.667 5.333V4A2 2 0 0 0 10.667 2H5.333A2 2 0 0 0 3.333 4v8a2 2 0 0 0 2 2h5.334a2 2 0 0 0 2-2v-1.333a2 2 0 0 0-2-2H6Z" stroke="#3B82F6" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Q3 Financial Overview
                  </span>
                  <svg width="16" height="16" fill="none" className="text-orange-500" viewBox="0 0 16 16"><path d="M8 3.333v4h3.333" stroke="#E86C2A" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="8" r="6.4" stroke="#E86C2A" strokeWidth="1.2"/></svg>
                </div>
              </th>
              <th colSpan={1} className="bg-[#E5E5E5] border border-[#E3E5E8] px-3 py-2 text-left text-xs font-semibold text-[#3B3F4C] tracking-wide align-middle" style={{ minWidth: '140px' }}>
                <div className="flex items-center">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1"><path d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0491 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1464C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z" fill="#A3ACA3"/></svg>
                  ABC
                </div>
              </th>
              <th colSpan={2} className="bg-[#E5E5E5] border border-[#E3E5E8] px-3 py-2 text-left text-xs font-semibold text-[#3B3F4C] tracking-wide align-middle" style={{ minWidth: '220px' }}>
                <div className="flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3A3CC]" viewBox="0 0 16 16"><path d="M8 2.667v10.666M2.667 8h10.666" stroke="#A3A3CC" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Answer a question
                </div>
              </th>
              <th colSpan={1} className="bg-[#E5E5E5] border border-[#E3E5E8] px-3 py-2 text-left text-xs font-semibold text-[#3B3F4C] tracking-wide align-middle" style={{ minWidth: '120px' }}>
                <div className="flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#E6A899]" viewBox="0 0 16 16"><path d="M8 2.667v10.666M2.667 8h10.666" stroke="#E6A899" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Extract
                </div>
              </th>
            </tr>
            {/* Column header row */}
            <tr>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">#</th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3ACA3]" viewBox="0 0 16 16"><path d="M4.667 8.667V7.333A2.667 2.667 0 0 1 7.333 4.667h1.334A2.667 2.667 0 0 1 11.333 7.333v1.334" stroke="#A3ACA3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="8" cy="11.333" r="1.333" stroke="#A3ACA3" strokeWidth="1.2"/></svg>
                  Job Request
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3ACA3]" viewBox="0 0 16 16"><path d="M8 2.667v10.666M2.667 8h10.666" stroke="#A3ACA3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Submitted
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3ACA3]" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.667" stroke="#A3ACA3" strokeWidth="1.2"/><path d="M8 5.333v2.667l1.333 1.333" stroke="#A3ACA3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Status
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3ACA3]" viewBox="0 0 16 16"><circle cx="8" cy="5.333" r="2.667" stroke="#A3ACA3" strokeWidth="1.2"/><path d="M2.667 13.333a5.333 5.333 0 0 1 10.666 0" stroke="#A3ACA3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Submitter
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3ACA3]" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.667" stroke="#A3ACA3" strokeWidth="1.2"/><path d="M5.333 8h5.334" stroke="#A3ACA3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  URL
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3ACA3]" viewBox="0 0 16 16"><circle cx="8" cy="8" r="6.667" stroke="#A3ACA3" strokeWidth="1.2"/><path d="M8 5.333v2.667l1.333 1.333" stroke="#A3ACA3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Assigned
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3ACA3]" viewBox="0 0 16 16"><path d="M8 2.667v10.666M2.667 8h10.666" stroke="#A3ACA3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Priority
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#A3ACA3]" viewBox="0 0 16 16"><path d="M8 2.667v10.666M2.667 8h10.666" stroke="#A3ACA3" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Due Date
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left align-middle">
                <span className="inline-flex items-center">
                  <svg width="16" height="16" fill="none" className="mr-1 text-[#E6A899]" viewBox="0 0 16 16"><path d="M8 2.667v10.666M2.667 8h10.666" stroke="#E6A899" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Est. Value
                </span>
              </th>
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
