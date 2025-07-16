import db from "./db";
import { type Product, ProductSchema } from "../types";

export function getAllProducts() {
  const products = db.prepare(`SELECT * FROM products`).all() as any[];
  return products.map((product) => {
    product.images = JSON.parse(product.images);
    product.colors = JSON.parse(product.colors);
    product.reviews = JSON.parse(product.reviews);
    return ProductSchema.parse(product);
  });
}

export function getProductBySlug(slug: string): Product | null {
  const product = db
    .prepare(`SELECT * FROM products WHERE slug = ?`)
    .get(slug) as any;

  if (!product) return null;

  product.images = JSON.parse(product.images);
  product.colors = JSON.parse(product.colors);
  product.reviews = JSON.parse(product.reviews);

  return ProductSchema.parse(product);
}
