import Image from "next/image";
import { notFound } from "next/navigation";

import { getProductBySlug } from "@/lib/products";

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
    <>
      <Image
        src={product.images[0]}
        alt={product.name}
        width="500"
        height="500"
      />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p>${product.price}</p>

      {/* {Object.keys(product.stock).map((key) => {
        return (
          <div key={key} onClick={() => {}}>
            {key.toUpperCase()}
          </div>
        );
      })} */}
    </>
  );
}

export default Product;
