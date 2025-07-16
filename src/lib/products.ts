import db from "./db";
import { type Product, type RawProduct, ProductSchema } from "../types";

export function getAllProducts() {
  const products = db.prepare(`SELECT * FROM products`).all() as RawProduct[];
  return products.map((product) => {
    product.images = JSON.parse(product.images);
    product.colors = JSON.parse(product.colors);

    return ProductSchema.parse(product);
  });
}

export function getProductBySlug(slug: string): Product | null {
  const product = db
    .prepare(`SELECT * FROM products WHERE slug = ?`)
    .get(slug) as RawProduct | undefined;

  if (!product) return null;

  product.images = JSON.parse(product.images);
  product.colors = JSON.parse(product.colors);
  product.reviews = JSON.parse(product.reviews);

  return ProductSchema.parse(product);
}
