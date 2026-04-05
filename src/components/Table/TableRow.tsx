interface TableRowProps {
  children: React.ReactNode;
  selected?: boolean;
}

export function TableRow({ children, selected = false }: TableRowProps) {
  return (
    <tr className={`table-row${selected ? ' table-row--selected' : ''}`} aria-selected={selected || undefined}>
      {children}
    </tr>
  );
}
