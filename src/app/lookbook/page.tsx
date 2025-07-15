import Image from "next/image";

import lookbookImages from "@/config/lookbook.json";
import classes from "./page.module.scss";

export default function Lookbook() {
  return (
    <section className={classes.lookbookSection}>
      {lookbookImages.map((product, index) => (
        <div key={index} className={classes.imageWrapper}>
          <Image
            src={product.src}
            alt="Lookbook product"
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
            className={classes.image}
            placeholder="blur"
            blurDataURL={product.blurDataURL}
          />
        </div>
      ))}
    </section>
  );
}
