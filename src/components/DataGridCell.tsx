import React from "react";

export interface DataGridCellProps {
  value?: any;
  tabIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onDoubleClick?: () => void;
  refEl?: (el: HTMLTableCellElement | null) => void;
}

const DataGridCell: React.FC<DataGridCellProps> = ({
  value,
  tabIndex = -1,
  className = "",
  style = {},
  onClick,
  onDoubleClick,
  refEl,
}) => {
  return (
    <td
      ref={refEl}
      tabIndex={tabIndex}
      className={className}
      style={style}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {value}
    </td>
  );
};

export default DataGridCell;
