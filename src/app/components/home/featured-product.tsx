import Link from "next/link";

import ProductCard from "../productCard/product-card";
import classes from "./featured-product.module.scss";
// import lcFeatured from "../../assets/images/home/lc-featured.jpg";
// import { products } from "../../config/products";

const products = [
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

function FeaturedProduct() {
  return (
    <section className={classes.featuredSection}>
      <div className={classes.featuredDesc}>
        <div>
          <h4>Effortless pieces, timeless style</h4>
          <p>
            Locally sourced, designed for legacy: our collections are crafted to
            endure, reducing environmental impact and our footprint for
            generations to come.
          </p>
        </div>
        <Link className={classes.ctaButton} href="/shop">
          Shop Now
        </Link>
      </div>
      <div className={classes.productCard}>
        <ProductCard product={products[0]} textColor="white" />
      </div>
    </section>
  );
}

export default FeaturedProduct;
