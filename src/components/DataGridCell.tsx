import React, { useRef, useEffect } from "react";

export interface DataGridCellProps {
  value?: any;
  tabIndex?: number;
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  onDoubleClick?: () => void;
  refEl?: (el: HTMLTableCellElement | null) => void;
  isEditing?: boolean;
  onValueChange?: (newValue: string) => void;
}

const DataGridCell: React.FC<DataGridCellProps> = ({
  value,
  tabIndex = -1,
  className = "",
  style = {},
  onClick,
  onDoubleClick,
  refEl,
  isEditing = false,
  onValueChange,
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing && inputRef.current) {
      inputRef.current.focus();
      inputRef.current.select();
    }
  }, [isEditing]);

  const handleInputKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onValueChange?.(e.currentTarget.value);
    }
  };

  const handleInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    onValueChange?.(e.currentTarget.value);
  };

  return (
    <td
      ref={refEl}
      tabIndex={tabIndex}
      className={className}
      style={style}
      onClick={onClick}
      onDoubleClick={onDoubleClick}
    >
      {isEditing ? (
        <input
          ref={inputRef}
          className="w-full h-full px-2 py-1 border border-blue-400 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm"
          defaultValue={value}
          onKeyDown={handleInputKeyDown}
          onBlur={handleInputBlur}
        />
      ) : (
        value
      )}
    </td>
  );
};

export default DataGridCell;
