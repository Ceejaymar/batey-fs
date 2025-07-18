import Link from "next/link";

import ProductCard from "../productCard/product-card";
import classes from "./featured-product.module.scss";
import { getProductBySlug } from "@/lib/products";

export default function FeaturedProduct() {
  const product = getProductBySlug("striped-shirt-green");

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
      <div className={classes.productItem}>
        {product && <ProductCard product={product} textColor="white" />}
      </div>
    </section>
  );
}
