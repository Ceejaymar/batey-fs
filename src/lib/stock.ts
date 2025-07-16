import db from "./db";
import { type StockRow, type ProductId, type Size, type Stock } from "../types";

export function getStockByProductId(productId: ProductId) {
  const stockRows = db
    .prepare(`SELECT size, quantity FROM stock WHERE product_id = ?`)
    .all(productId);

  const stock: Partial<Stock> = {};

  for (const row of stockRows as StockRow[]) {
    stock[row.size] = row.quantity;
  }

  return stock;
}

export function decrementStock(
  productId: ProductId,
  size: Size,
  amount: number
) {
  return db
    .prepare(
      `UPDATE stock SET quantity = quantity - ? WHERE product_id = ? AND size = ?`
    )
    .run(amount, productId, size);
}
