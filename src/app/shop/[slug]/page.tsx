import Image from "next/image";
import { notFound } from "next/navigation";

import { getProductBySlug } from "@/lib/products";
import Stock from "../../components/stock/stock";
import classes from "./page.module.scss";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function Product({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  console.log("product", product);

  if (!product) {
    notFound();
  }

  return (
    <main className={classes.productPage}>
      <div className={classes.imgWrapper}>
        <Image
          src={product.images[0]}
          alt={product.name}
          width="750"
          height="500"
        />
      </div>
      <div className={classes.productDetails}>
        <div className={classes.tags}>
          {product.tags.map((tag) => (
            <span key={tag} className={classes.tag}>
              {tag}
            </span>
          ))}
        </div>
        <h2>{product.name}</h2>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <Stock stock={product.stock} />
      </div>
    </main>
  );
}

export default Product;
