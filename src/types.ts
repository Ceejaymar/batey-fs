import { z } from "zod";

export const sizes = ["XS", "S", "M", "L", "XL", "XXL"] as const;

export type Size = (typeof sizes)[number];

export type Stock = {
  [key in Size]: number;
};

export type StockRow = {
  size: Size;
  quantity: number;
};

export const StockSchema = z.record(
  z.enum(sizes),
  z.number().int().nonnegative()
);

export const ProductSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  images: z.array(z.string()),
  description: z.string(),
  price: z.number(),
  colors: z.array(z.string()),
  categories: z.array(z.string()),
  tags: z.array(z.string()),
  stock: StockSchema,
});

export type Product = z.infer<typeof ProductSchema>;

export type RawProduct = Omit<Product, "images" | "colors" | "reviews"> & {
  images: string;
  colors: string;
  reviews: string;
};

export type ProductId = Product["id"];
