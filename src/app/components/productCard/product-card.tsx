import Link from "next/link";
import Image from "next/image";
import clsx from "clsx";

import classes from "./product-card.module.scss";

type ProductProps = {
  product: {
    productId: number;
    name: string;
    description: string;
    images: string[];
    price: number;
  };
  textColor?: "white";
};

export default function ProductCard({ product, textColor }: ProductProps) {
  const cardClass = clsx(
    classes.card,
    textColor === "white" ? classes.textWhite : classes.textDefault
  );

  return (
    <Link className={cardClass} href={`/product/${product.productId}`}>
      <Image src={product.images[0]} alt={product.name} fill />
      <div>
        <p>{product.name}</p>
        <p>${product.price}</p>
      </div>
    </Link>
  );
}
