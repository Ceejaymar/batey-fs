import ProductCard from "../productCard/product-card";
import classes from "./new-arrivals.module.scss";

export const products = [
  {
    productId: 1,
    name: "Product 1",
    category: "Category 1",
    price: 100,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-2.png?alt=media&token=0ca8b1b2-6fc0-45bc-8b6d-8f14172b4d11",
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-1.png?alt=media&token=f1032cfc-28ca-4e69-a181-6dac42dbbb70",
    ],
    imageAlt: "Image of product 1",
    description: "Description of product 1",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
  {
    productId: 2,
    name: "Product 2",
    category: "Category 1",
    price: 200,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-3.png?alt=media&token=11bdfccc-6c0c-42b1-bdd3-fdd70c7ab372",
    ],
    imageAlt: "Image of product 2",
    description: "Description of product 2",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
  {
    productId: 3,
    name: "Product 3",
    category: "Category 1",
    price: 100,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-2.png?alt=media&token=0ca8b1b2-6fc0-45bc-8b6d-8f14172b4d11",
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-1.png?alt=media&token=f1032cfc-28ca-4e69-a181-6dac42dbbb70",
    ],
    imageAlt: "Image of product 1",
    description: "Description of product 1",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
  {
    productId: 4,
    name: "Product 4",
    category: "Category 1",
    price: 200,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-3.png?alt=media&token=11bdfccc-6c0c-42b1-bdd3-fdd70c7ab372",
    ],
    imageAlt: "Image of product 2",
    description: "Description of product 2",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
  {
    productId: 5,
    name: "Product 5",
    category: "Category 1",
    price: 100,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-2.png?alt=media&token=0ca8b1b2-6fc0-45bc-8b6d-8f14172b4d11",
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-1.png?alt=media&token=f1032cfc-28ca-4e69-a181-6dac42dbbb70",
    ],
    imageAlt: "Image of product 1",
    description: "Description of product 1",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
  {
    productId: 6,
    name: "Product 6",
    category: "Category 1",
    price: 200,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-3.png?alt=media&token=11bdfccc-6c0c-42b1-bdd3-fdd70c7ab372",
    ],
    imageAlt: "Image of product 2",
    description: "Description of product 2",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
  {
    productId: 7,
    name: "Product 7",
    category: "Category 1",
    price: 200,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-3.png?alt=media&token=11bdfccc-6c0c-42b1-bdd3-fdd70c7ab372",
    ],
    imageAlt: "Image of product 2",
    description: "Description of product 2",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
  {
    productId: 8,
    name: "Product 8",
    category: "Category 1",
    price: 100,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-2.png?alt=media&token=0ca8b1b2-6fc0-45bc-8b6d-8f14172b4d11",
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-1.png?alt=media&token=f1032cfc-28ca-4e69-a181-6dac42dbbb70",
    ],
    imageAlt: "Image of product 1",
    description: "Description of product 1",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
  {
    productId: 9,
    name: "Product 9",
    category: "Category 1",
    price: 200,
    images: [
      "https://firebasestorage.googleapis.com/v0/b/theends.appspot.com/o/Star-3.png?alt=media&token=11bdfccc-6c0c-42b1-bdd3-fdd70c7ab372",
    ],
    imageAlt: "Image of product 2",
    description: "Description of product 2",
    stock: { xs: 10, s: 20, m: 30, l: 40, xl: 50, xxl: 60 },
    restockDate: "2021-01-01",
    material: ["Material 1", "Material 2"],
    reviews: [{ reviewId: 1, rating: 5, comment: "Great product" }],
    dateAdded: "2021-01-01",
    tags: ["Tag 1", "Tag 2"],
    color: "black",
  },
];

function NewArrivals() {
  return (
    <section className={classes.newArrivalsSection}>
      <h2>New Arrivals</h2>
      <div>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.productId} product={product} />
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
