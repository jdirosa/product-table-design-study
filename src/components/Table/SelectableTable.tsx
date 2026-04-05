import { useMemo, useState } from 'react';
import type { TableHeader, TableRow, SelectionAction } from './types';
import { Checkbox } from '../Checkbox';
import { SearchField } from '../SearchField';
import { Table } from './Table';
import { TableHeader as TableHeaderRow } from './TableHeader';
import { TableHeaderCell } from './TableHeaderCell';
import { TableBody } from './TableBody';
import { TableRow as TableRowElement } from './TableRow';
import { TableCell } from './TableCell';
import { SelectionBar } from './SelectionBar';
import { EmptyState } from './EmptyState';
import './SelectableTable.css';

interface SelectableTableProps {
  label: string;
  headers: TableHeader[];
  rows: TableRow[];
  actions: SelectionAction[];
  emptyState?: React.ReactNode;
  searchValue?: string;
  onSearchChange?: (value: string) => void;
  searchPlaceholder?: string;
}

export function SelectableTable({
  label,
  headers,
  rows,
  actions,
  emptyState,
  searchValue,
  onSearchChange,
  searchPlaceholder,
}: SelectableTableProps) {
  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

  const visibleIds = useMemo(() => new Set(rows.map((row) => row.id)), [rows]);
  const visibleSelectedIds = useMemo(
    () => new Set([...selectedIds].filter((id) => visibleIds.has(id))),
    [selectedIds, visibleIds],
  );

  const allSelected = rows.length > 0 && visibleSelectedIds.size === rows.length;
  const someSelected = visibleSelectedIds.size > 0;
  const selectedCount = visibleSelectedIds.size;

  function handleSelectAll() {
    if (someSelected) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(rows.map((row) => row.id)));
    }
  }

  function handleSelectRow(id: string, checked: boolean) {
    setSelectedIds((prev) => {
      const next = new Set(prev);
      if (checked) {
        next.add(id);
      } else {
        next.delete(id);
      }
      return next;
    });
  }

  return (
    <div className="selectable-table">
      {onSearchChange && (
        <div className="selectable-table__search">
          <SearchField
            value={searchValue ?? ''}
            onChange={onSearchChange}
            placeholder={searchPlaceholder}
          />
        </div>
      )}
      <div className="table-wrapper">
        <SelectionBar
          visible={someSelected}
          count={selectedCount}
          actions={actions}
        />
        <Table label={label}>
          <TableHeaderRow>
            <th className="table-header__checkbox" scope="col">
              <Checkbox
                checked={allSelected}
                indeterminate={someSelected && !allSelected}
                onChange={() => handleSelectAll()}
                ariaLabel={`Select all ${label.toLowerCase()}`}
              />
            </th>
            {headers.map((header, i) => (
              <TableHeaderCell key={i} width={header.width} ariaLabel={header.ariaLabel}>
                {header.label}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
          <TableBody>
            {rows.length > 0 ? (
              rows.map((row) => (
                <TableRowElement key={row.id} selected={visibleSelectedIds.has(row.id)}>
                  <td className="table-row__checkbox">
                    <Checkbox
                      checked={visibleSelectedIds.has(row.id)}
                      onChange={(checked) => handleSelectRow(row.id, checked)}
                      ariaLabel={`Select ${row.label}`}
                    />
                  </td>
                  {row.cells.map((cell, i) => (
                    <TableCell key={i} className={cell.className}>
                      {cell.content}
                    </TableCell>
                  ))}
                </TableRowElement>
              ))
            ) : (
              <tr role="presentation">
                <td colSpan={headers.length + 1}>
                  {emptyState ?? <EmptyState onClearSearch={() => onSearchChange?.('')} />}
                </td>
              </tr>
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
