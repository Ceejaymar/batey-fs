import db from "./db";
import {
  type RawProduct,
  type Stock,
  type StockRow,
  type Product,
  ProductSchema,
  ProductSchemaBasic,
} from "../types";

export function getAllProducts() {
  const products = db.prepare(`SELECT * FROM products`).all() as RawProduct[];
  return products.map((product) => {
    product.images = JSON.parse(product.images);
    product.colors = JSON.parse(product.colors);

    return ProductSchemaBasic.parse(product);
  });
}

export function getProductBySlug(slug: string): Product | null {
  const product = db
    .prepare(`SELECT * FROM products WHERE slug = ?`)
    .get(slug) as RawProduct | undefined;

  if (!product) return null;

  product.images = JSON.parse(product.images);
  product.colors = JSON.parse(product.colors);

  const stock = db
    .prepare(`SELECT size, quantity FROM stock WHERE product_id = ?`)
    .all(product.id) as StockRow[];

  product.stock = stock.reduce((acc, row) => {
    acc[row.size] = row.quantity;
    return acc;
  }, {} as Stock);

  const product_categories = db
    .prepare(
      `SELECT c.name FROM categories c
        JOIN product_categories pc ON c.id = pc.category_id
        WHERE pc.product_id = ?`
    )
    .all(product.id) as { name: string }[];

  const categories = product_categories.map(
    (category: { name: string }) => category.name
  );

  product.categories = categories;

  const tags = db
    .prepare(
      `SELECT t.name FROM tags t
      JOIN product_tags pt ON t.id = pt.tag_id
      WHERE pt.product_id = ?`
    )
    .all(product.id) as { name: string }[];

  product.tags = tags.map((tag) => tag.name);

  return ProductSchema.parse(product);
}
