import { z } from "zod";

const sizes = ["XS", "S", "M", "L", "XL", "XXL"];

const SizeEnum = z.enum(sizes);
export type Size = (typeof sizes)[number];

const StockSchema = z.object(
  Object.fromEntries(sizes.map((size) => [size, z.number()])) as Record<
    Size,
    z.ZodNumber
  >
);

export type StockRow = {
  size: Size;
  quantity: number;
};

export type Stock = z.infer<typeof StockSchema>;

export const ProductSchema = z.object({
  id: z.number(),
  slug: z.string(),
  name: z.string(),
  images: z.array(z.string()),
  description: z.string(),
  price: z.number(),
  colors: z.array(z.string()),
  stock: StockSchema,
  categories: z.array(z.string()),
  reviews: z.array(
    z.object({
      rating: z.number(),
      comment: z.string(),
    })
  ),
  tags: z.array(z.string()),
  restockDate: z.string().nullable(),
  dateAdded: z.string(),
});

export type Product = z.infer<typeof ProductSchema>;

export type ProductId = Product["id"];
