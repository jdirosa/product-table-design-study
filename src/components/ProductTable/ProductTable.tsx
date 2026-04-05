import { SelectableTable } from "../Table/SelectableTable";
import { PRODUCT_TABLE_HEADERS } from "./productTableHeaders";
import { useProductTableRows } from "./useProductTableRows";
import type { Product } from "../../types";
import "./ProductTable.css";

interface ProductTableProps {
  products: Product[];
  searchQuery?: string;
  onSearchChange?: (value: string) => void;
}

const selectionActions = [{ label: "Bulk edit" }, { label: "Set as drafts" }];

export function ProductTable({
  products,
  searchQuery = "",
  onSearchChange,
}: ProductTableProps) {
  const rows = useProductTableRows(products, searchQuery);

  return (
    <SelectableTable
      label="Products"
      headers={PRODUCT_TABLE_HEADERS}
      rows={rows}
      actions={selectionActions}
      searchValue={searchQuery}
      onSearchChange={onSearchChange}
      searchPlaceholder="Search and filter products"
    />
  );
}
