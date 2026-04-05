interface TableHeaderProps {
  children: React.ReactNode;
}

export function TableHeader({ children }: TableHeaderProps) {
  return (
    <thead>
      <tr className="table-header">
        {children}
      </tr>
    </thead>
  );
}
