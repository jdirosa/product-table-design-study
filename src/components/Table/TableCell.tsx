interface TableCellProps {
  children: React.ReactNode;
  className?: string;
}

export function TableCell({ children, className }: TableCellProps) {
  return (
    <td className={`table-cell${className ? ` ${className}` : ''}`}>
      {children}
    </td>
  );
}
