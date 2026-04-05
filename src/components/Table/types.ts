export interface TableHeader {
  label?: string;
  ariaLabel?: string;
  width?: string;
}

export interface TableCell {
  content: React.ReactNode;
  className?: string;
}

export interface TableRow {
  id: string;
  label: string;
  cells: TableCell[];
}

export interface SelectionAction {
  label: string;
  onClick?: () => void;
}
