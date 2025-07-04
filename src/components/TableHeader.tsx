/* global document */
import React, { useState } from 'react';

// Icons
const MenuIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <circle cx="2" cy="6" r="1" fill="currentColor"/>
    <circle cx="6" cy="6" r="1" fill="currentColor"/>
    <circle cx="10" cy="6" r="1" fill="currentColor"/>
  </svg>
);

const SortAscIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 3L8.5 6H3.5L6 3Z" fill="currentColor"/>
  </svg>
);

const SortDescIcon = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M6 9L3.5 6H8.5L6 9Z" fill="currentColor"/>
  </svg>
);

interface Column {
  id: string;
  label: string;
  width: number;
  visible: boolean;
}

interface TableHeaderProps {
  onSort: (columnId: string) => void;
  sortColumn: string;
  sortDirection: 'asc' | 'desc';
  columns: Column[];
  onResize: (columnId: string, newColumnWidth: number) => void;
  onToggleColumn: (columnId: string) => void;
}

const TableHeader: React.FC<TableHeaderProps> = ({ 
  onSort, 
  sortColumn, 
  sortDirection, 
  columns, 
  onResize, 
  onToggleColumn 
}) => {
  const [showColumnMenu, setShowColumnMenu] = useState<string | null>(null);

  // Handle drag for resizing
  const handleMouseDown = (e: React.MouseEvent, colId: string) => {
    e.preventDefault();
    const startX = e.clientX;
    const th = (e.target as HTMLElement).closest('th');
    if (!th) return;
    const startWidth = th.offsetWidth;
    
    const onMouseMove = (moveEvent: MouseEvent) => {
      const newWidth = Math.max(40, startWidth + moveEvent.clientX - startX);
      onResize(colId, newWidth);
    };
    
    const onMouseUp = () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
    };
    
    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };

  const toggleColumnMenu = (e: React.MouseEvent, colId: string) => {
    e.stopPropagation();
    setShowColumnMenu(showColumnMenu === colId ? null : colId);
  };

  return (
    <thead className="table-header">
      <tr>
        {columns.filter(col => col.visible).map((header) => (
          <th
            key={header.id}
            style={{ 
              width: `${header.width}px`, 
              minWidth: '40px',
              height: '32px', 
              backgroundColor: '#F9FAFB',
              position: 'sticky',
              top: 0,
              zIndex: 10,
              boxSizing: 'border-box',
              borderBottom: '1px solid #E5E7EB',
              borderRight: '1px solid #E5E7EB',
            }}
            className={`
              group relative select-none font-medium text-gray-600 text-left px-3 py-2 transition-colors
              ${header.id === 'id' ? 'checkbox-header' : ''}
            `}
            onClick={() => onSort(header.id)}
          >
            <div className="column-header flex items-center justify-between gap-1.5 h-full">
              <span className="truncate text-sm font-medium">{header.label}</span>
              <div className="flex items-center space-x-1">
                {sortColumn === header.id && (
                  <span className="sort-arrow text-blue-600">
                    {sortDirection === 'asc' ? <SortAscIcon /> : <SortDescIcon />}
                  </span>
                )}
                {header.id !== 'id' && (
                  <button 
                    className="ml-1 text-gray-400 hover:text-gray-600 invisible group-hover:visible p-1"
                    onClick={(e) => toggleColumnMenu(e, header.id)}
                  >
                    <MenuIcon />
                  </button>
                )}
                {showColumnMenu === header.id && (
                  <div 
                    className="absolute top-full right-0 mt-1 bg-white shadow-lg rounded-md border border-gray-200 z-20"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <div 
                      className="px-4 py-2 text-sm hover:bg-gray-50 cursor-pointer"
                      onClick={() => {
                        onToggleColumn(header.id);
                        setShowColumnMenu(null);
                      }}
                    >
                      Hide column
                    </div>
                  </div>
                )}
              </div>
            </div>
            {/* Resize handle */}
            <span
              className="absolute top-0 right-0 h-full w-1 cursor-col-resize hover:bg-blue-200 active:bg-blue-300 transition-colors"
              onMouseDown={e => { e.stopPropagation(); handleMouseDown(e, header.id); }}
              title="Drag to resize column"
            />
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
