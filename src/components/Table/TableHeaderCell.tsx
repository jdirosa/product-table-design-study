interface TableHeaderCellProps {
  children?: React.ReactNode;
  ariaLabel?: string;
  width?: string;
}

export function TableHeaderCell({ children, ariaLabel, width }: TableHeaderCellProps) {
  return (
    <th
      className="table-header__cell"
      scope="col"
      aria-label={ariaLabel}
      style={width ? { '--col-width': width } as React.CSSProperties : undefined}
    >
      {children}
    </th>
  );
}
