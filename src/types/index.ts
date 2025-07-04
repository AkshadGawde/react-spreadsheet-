// Common interface types for the application

export interface SpreadsheetRow {
  id: number;
  jobRequest: string;
  submitted: string;
  status: 'In-process' | 'Need to start' | 'Complete' | 'Blocked';
  submitter: string;
  url: string;
  assigned: string;
  priority: 'High' | 'Medium' | 'Low';
  dueDate: string;
  estValue: string;
}

export interface Tab {
  id: string;
  label: string;
  isActive: boolean;
  color?: string;
}

export interface BottomTab {
  id: string;
  label: string;
  isActive: boolean;
  count?: number;
}

export interface SelectedCell {
  row: number;
  column: number;
}

export interface ColumnConfig {
  key: keyof SpreadsheetRow | 'index';
  label: string;
  width: number;
  resizable: boolean;
  sortable: boolean;
}