import { useMemo } from "react";
import type { Product } from "../../types";
import type { TableRow } from "../Table/types";
import { Thumbnail } from "../Table/Thumbnail";
import { Badge } from "../Badge";

export function useProductTableRows(
  products: Product[],
  searchQuery: string,
): TableRow[] {
  const filtered = useMemo(() => {
    if (!searchQuery.trim()) return products;
    const query = searchQuery.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query) ||
        product.status.toLowerCase().includes(query),
    );
  }, [products, searchQuery]);

  return useMemo(
    () =>
      filtered.map((product) => ({
        id: product.id,
        label: product.name,
        cells: [
          {
            content: <Thumbnail src={product.image} alt={product.name} />,
            className: "product-table__thumbnail",
          },
          {
            content: (
              <span className="product-table__name-text">{product.name}</span>
            ),
            className: "product-table__name",
          },
          {
            content: (
              <Badge variant={product.status}>
                {product.status === "active" ? "Active" : "Draft"}
              </Badge>
            ),
          },
          { content: product.inventory },
          { content: product.category },
          { content: product.channels, className: "product-table__channels" },
        ],
      })),
    [filtered],
  );
}
