import React from 'react';
import { TaskData } from '../assets/mockData';

interface StatusCellProps {
  status: TaskData['status'];
}

export const StatusCell: React.FC<StatusCellProps> = ({ status }) => {
  // Inline styles for pixel-perfect match to Figma
  const style = {
    fontSize: '12px',
    fontWeight: 500,
    padding: '2px 8px',
    borderRadius: '16px',
    display: 'inline-flex',
    alignItems: 'center',
    height: '22px',
    backgroundColor: status === 'In-process' ? '#FFF7ED' :
                    status === 'Need to start' ? '#EFF6FF' :
                    status === 'Complete' ? '#ECFDF5' :
                    status === 'Blocked' ? '#FEF2F2' : '',
    color: status === 'In-process' ? '#C2410C' :
           status === 'Need to start' ? '#2563EB' :
           status === 'Complete' ? '#059669' :
           status === 'Blocked' ? '#DC2626' : '',
  };
  
  return (
    <div style={style}>
      {status}
    </div>
  );
};

interface PriorityCellProps {
  priority: TaskData['priority'];
}

export const PriorityCell: React.FC<PriorityCellProps> = ({ priority }) => {
  // Inline styles for pixel-perfect match to Figma
  const dotStyle = {
    width: '8px',
    height: '8px',
    borderRadius: '50%',
    marginRight: '6px',
    backgroundColor: priority === 'High' ? '#DC2626' : 
                    priority === 'Medium' ? '#D97706' : 
                    priority === 'Low' ? '#2563EB' : '',
  };
  
  const textStyle = {
    fontSize: '14px',
    fontWeight: 400,
    color: priority === 'High' ? '#DC2626' : 
           priority === 'Medium' ? '#D97706' : 
           priority === 'Low' ? '#2563EB' : '',
  };
  
  return (
    <div className="flex items-center">
      <span style={dotStyle}></span>
      <span style={textStyle}>{priority}</span>
    </div>
  );
};

interface URLCellProps {
  url: string;
}

export const URLCell: React.FC<URLCellProps> = ({ url }) => {
  return (
    <a 
      href={`https://${url}`} 
      target="_blank" 
      rel="noopener noreferrer" 
      className="truncate block"
      style={{ color: '#2563EB', fontSize: '14px', fontWeight: 400, maxWidth: '160px' }}
    >
      {url}
    </a>
  );
};

export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(value);
};
