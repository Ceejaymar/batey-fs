import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import classes from "./product-card.module.scss";

type ProductProps = {
  product: {
    id: number;
    name: string;
    description: string;
    images: string[];
    price: number;
  };
  textColor?: "white";
};

export default function ProductCard({ product, textColor }: ProductProps) {
  const cardClasses = clsx(
    classes.productCard,
    textColor === "white" ? classes.textWhite : classes.textDefault
  );

  return (
    <Link className={cardClasses} href={`/product/${product.id}`}>
      <div className={classes.imgWrapper}>
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className={classes.productDetails}>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}
