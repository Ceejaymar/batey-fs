import Header from "./components/home/header";
import NewArrivals from "./components/home/new-arrivals";
import Quotes from "./components/home/quotes";
import FeaturedProduct from "./components/home/featured-product";
import Subscribe from "./components/home/subscribe";

export default function Home() {
  return (
    <>
      <Header />
      <NewArrivals />
      <Quotes />
      <FeaturedProduct />
      <Subscribe />
    </>
  );
}
