import Image from "next/image";
import { notFound } from "next/navigation";
import HeartStraightIcon from "@/app/components/icons/heart-icon";

import { getProductBySlug } from "@/lib/products";
import Stock from "../../components/stock/stock";
import Button from "@/app/components/button/button";
import classes from "./page.module.scss";

type PageProps = {
  params: Promise<{ slug: string }>;
};

async function Product({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

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
        <h2 className={classes.productName}>{product.name}</h2>
        <p className={classes.productPrice}>${product.price}</p>
        <Stock stock={product.stock} />
        <div className={classes.buttonContainer}>
          <Button>Add to cart</Button>
          <Button variant="secondary" icon={<HeartStraightIcon size={32} />} />
        </div>
        <div></div>
        <p className={classes.productDesc}>{product.description}</p>
      </div>
    </main>
  );
}

export default Product;
