import ProductCard from "../productCard/product-card";
import classes from "./new-arrivals.module.scss";
import { getAllProducts } from "@/lib/products";

export default function NewArrivals() {
  const products = getAllProducts();

  return (
    <section className={classes.newArrivalsSection}>
      <h2>New Arrivals</h2>
      <div>
        {products.slice(0, 3).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
