import { getAllProducts } from "@/lib/products";
import ProductCard from "../components/productCard/product-card";
import classes from "./page.module.scss";

function Shop() {
  const products = getAllProducts();

  return (
    <main>
      <h1 className={classes.title}>Shop</h1>
      <div className={classes.wrapper}>
        <div className={classes.productsContainer}>
          {products.map((product) => (
            <div key={product.id} className={classes.productItem}>
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

export default Shop;
