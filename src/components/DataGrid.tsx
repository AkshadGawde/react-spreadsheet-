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
        <table className="w-full">
          {/* Header */}
          <thead>
            {/* Grouped header row */}
            <tr>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2" style={{ width: '60px' }}></th>
              <th colSpan={5} className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-left text-xs font-semibold text-[#3B3F4C] tracking-wide" style={{ minWidth: '840px' }}>
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle', marginRight: '8px' }}>
                  <path d="M6.16667 4.66667C6.44281 4.66667 6.66667 4.89053 6.66667 5.16667C6.66667 5.41771 6.48166 5.62554 6.24056 5.66125L6.16667 5.66667H4.66667C3.378 5.66667 2.33334 6.71134 2.33334 8C2.33334 9.24265 3.30472 10.2584 4.52957 10.3294L4.66667 10.3333H6.16667C6.44281 10.3333 6.66667 10.5572 6.66667 10.8333C6.66667 11.0844 6.48166 11.2922 6.24056 11.3279L6.16667 11.3333H4.66667C2.82572 11.3333 1.33334 9.84095 1.33334 8C1.33334 6.21484 2.73664 4.75744 4.5003 4.67075L4.66667 4.66667H6.16667ZM11.3333 4.66667C13.1743 4.66667 14.6667 6.15906 14.6667 8C14.6667 9.78517 13.2634 11.2426 11.4997 11.3293L11.3333 11.3333H9.83334C9.55719 11.3333 9.33334 11.1095 9.33334 10.8333C9.33334 10.5823 9.51834 10.3745 9.75945 10.3388L9.83334 10.3333H11.3333C12.622 10.3333 13.6667 9.28867 13.6667 8C13.6667 6.75736 12.6953 5.7416 11.4704 5.67063L11.3333 5.66667H9.83334C9.55719 5.66667 9.33334 5.44281 9.33334 5.16667C9.33334 4.91563 9.51834 4.70781 9.75945 4.67209L9.83334 4.66667H11.3333ZM4.66667 7.50001H11.3333C11.6095 7.50001 11.8333 7.72386 11.8333 8C11.8333 8.25314 11.6452 8.46233 11.4012 8.49544L11.3333 8.5H4.66667C4.39053 8.5 4.16667 8.27615 4.16667 8C4.16667 7.74687 4.35477 7.53768 4.59882 7.50457L4.66667 7.50001H11.3333H4.66667Z" fill="#1A8CFF"/>
                </svg>
                Q3 Financial Overview
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline', verticalAlign: 'middle', marginLeft: '8px' }}>
                  <path d="M10.8337 3.4534C10.6662 3.67297 10.7085 3.98673 10.9281 4.15418C12.1203 5.06343 12.8333 6.47213 12.8333 8C12.8333 10.4906 10.9494 12.5413 8.52886 12.8047L8.97977 12.3535C9.17503 12.1583 9.17503 11.8417 8.97977 11.6464C8.80226 11.4689 8.52448 11.4528 8.32874 11.598L8.27266 11.6464L6.93933 12.9798C6.76182 13.1573 6.74568 13.4351 6.89092 13.6308L6.93933 13.6869L8.27266 15.0202C8.46793 15.2155 8.78451 15.2155 8.97977 15.0202C9.15728 14.8427 9.17342 14.5649 9.02818 14.3692L8.97977 14.3131L8.47961 13.8139C11.4769 13.57 13.8333 11.0602 13.8333 8C13.8333 6.15684 12.9721 4.45547 11.5345 3.35904C11.3149 3.19158 11.0012 3.23383 10.8337 3.4534ZM7.02021 0.979775C6.82495 1.17504 6.82495 1.49162 7.02021 1.68688L7.5197 2.18615C4.52271 2.43039 2.16666 4.94005 2.16666 8C2.16666 9.76297 2.95416 11.3983 4.2872 12.4994C4.5001 12.6753 4.81525 12.6452 4.99112 12.4323C5.16698 12.2194 5.13695 11.9043 4.92405 11.7284C3.81861 10.8153 3.16666 9.46146 3.16666 8C3.16666 5.50957 5.0502 3.45907 7.47045 3.19534L7.02021 3.64644C6.82495 3.8417 6.82495 4.15829 7.02021 4.35355C7.21547 4.54881 7.53205 4.54881 7.72732 4.35355L9.06065 3.02022C9.25591 2.82495 9.25591 2.50837 9.06065 2.31311L7.72732 0.979775C7.53205 0.784513 7.21547 0.784513 7.02021 0.979775Z" fill="#FA6736"/>
                </svg>
              </th>
              <th colSpan={1} className="bg-[#E6F0EA] border border-[#E3E5E8] px-3 py-2 text-center text-xs font-semibold text-[#2B4A3D] tracking-wide" style={{ minWidth: '140px' }}>
                <span className="inline-flex items-center justify-center">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1"><path d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0491 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1464C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z" fill="#A3ACA3"/></svg>
                  ABC ...
                </span>
              </th>
              <th colSpan={2} className="bg-[#EAE6F7] border border-[#E3E5E8] px-3 py-2 text-center text-xs font-semibold text-[#3B2F4C] tracking-wide" style={{ minWidth: '220px' }}>
                <span className="inline-flex items-center">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1"><path d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0491 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1464C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z" fill="#A3ACA3"/></svg>
                  Answer a question ...
                </span>
              </th>
              <th colSpan={1} className="bg-[#F7EAE6] border border-[#E3E5E8] px-3 py-2 text-center text-xs font-semibold text-[#4C2B2B] tracking-wide" style={{ minWidth: '120px' }}>
                <span className="inline-flex items-center">
                  <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1"><path d="M8.50001 2C8.77616 2 9.00001 2.22386 9.00001 2.5V6.33333H10.6636C11.6762 6.33333 12.497 7.15414 12.497 8.16667V12.2944L13.6467 11.1462C13.8421 10.9511 14.1587 10.9513 14.3538 11.1467C14.5489 11.3421 14.5487 11.6587 14.3533 11.8538L12.3503 13.8541C12.155 14.0492 11.8386 14.0491 11.6434 13.8539L9.64308 11.8536C9.44782 11.6583 9.44782 11.3417 9.64308 11.1464C9.83834 10.9512 10.1549 10.9512 10.3502 11.1464L11.497 12.2932V8.16667C11.497 7.70643 11.1239 7.33333 10.6636 7.33333H6.33328C5.87304 7.33333 5.49995 7.70643 5.49995 8.16667V12.2932L6.64673 11.1464C6.84199 10.9512 7.15858 10.9512 7.35384 11.1464C7.5491 11.3417 7.5491 11.6583 7.35384 11.8536L5.3535 13.8539C5.15824 14.0491 4.84166 14.0492 4.6464 13.8539L2.64602 11.8536C2.45076 11.6583 2.45076 11.3417 2.64602 11.1464C2.84128 10.9512 3.15786 10.9512 3.35312 11.1464L4.49995 12.2932V8.16667C4.49995 7.15414 5.32076 6.33333 6.33328 6.33333H8.00001V2.5C8.00001 2.22386 8.22387 2 8.50001 2Z" fill="#A3ACA3"/></svg>
                  Extract ...
                </span>
              </th>
              <th colSpan={1} className="bg-[#E3E5E8] border border-[#E3E5E8] px-3 py-2 text-center text-xs font-semibold text-[#4C2B2B] tracking-wide" style={{ minWidth: '120px' }}>
                <span className="inline-flex items-center">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79153 2.5C10.1079 2.5 10.3695 2.73501 10.4109 3.04007L10.4167 3.12487L10.4177 9.16667H16.4619C16.8071 9.16667 17.0869 9.44649 17.0869 9.79167C17.0869 10.1081 16.8518 10.3696 16.5467 10.411L16.4619 10.4167H10.4177L10.4194 16.4576C10.4194 16.8028 10.1397 17.0827 9.7945 17.0827C9.47808 17.0827 9.21654 16.8477 9.17509 16.5427L9.16937 16.4578L9.16766 10.4167H3.12683C2.78165 10.4167 2.50183 10.1368 2.50183 9.79167C2.50183 9.47525 2.73696 9.21376 3.04202 9.17237L3.12683 9.16667H9.16766L9.16666 3.12513C9.16659 2.77995 9.44635 2.5 9.79153 2.5Z" fill="#04071E"/>
</svg>

                </span>
              </th>
            </tr>
            
            {/* Column header row */}
            <tr>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C]">#</th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C] text-left">
                <span className="flex items-center">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1"><path d="M8 1.33331C4.324 1.33331 1.33334 4.324 1.33334 7.99998C1.33334 11.676 4.324 14.6666 8 14.6666C11.676 14.6666 14.6667 11.676 14.6667 7.99998C14.6667 4.324 11.676 1.33331 8 1.33331ZM8 13.3333C5.05467 13.3333 2.66668 10.9453 2.66668 7.99998C2.66668 5.05465 5.05467 2.66665 8 2.66665C10.9453 2.66665 13.3333 5.05465 13.3333 7.99998C13.3333 10.9453 10.9453 13.3333 8 13.3333ZM8.66668 4.66665H7.33334V8.66665L10.472 10.472L11.1387 9.36131L8.66668 7.97265V4.66665Z" fill="#1A8CFF"/></svg>
                  Job Request
                </span>
              </th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C]">Submitted</th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C]">Status</th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C]">Submitter</th>
              <th className="bg-[#F7F8FA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B3F4C]">URL</th>
              <th className="bg-[#E6F0EA] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#2B4A3D]">Assigned</th>
              <th className="bg-[#EAE6F7] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B2F4C]">Priority</th>
              <th className="bg-[#EAE6F7] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#3B2F4C]">Due Date</th>
              <th className="bg-[#F7EAE6] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#4C2B2B]">Est. Value</th>
              <th className="bg-[#ffffff] border border-[#E3E5E8] px-3 py-2 text-xs font-bold text-[#4C2B2B]"></th>
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
                <td 
                  className={`border border-gray-200 px-3 py-2 text-sm text-gray-900 ${
                    selectedCell?.row === rowIndex && selectedCell?.column === 9 
                      ? 'bg-blue-100 ring-2 ring-blue-500' 
                      : ''
                  }`}
                  onClick={() => handleCellClick(rowIndex, 9)}
                  onDoubleClick={() => handleCellDoubleClick(rowIndex, 9)}
                >
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
                {/* Extra empty cell for '+' column */}
                <td
                  className="border border-gray-200 px-3 py-2 h-10"
                ></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataGrid;
