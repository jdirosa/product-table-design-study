import './Table.css';

interface TableProps {
  children: React.ReactNode;
  label: string;
}

export function Table({ children, label }: TableProps) {
  return (
    <table className="table" aria-label={label}>
      {children}
    </table>
  );
}
