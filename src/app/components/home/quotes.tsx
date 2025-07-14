import QuotesIcon from "../icons/quote-icon";
import classes from "./quotes.module.scss";

export default function Quotes() {
  return (
    <section className={classes.quotes}>
      Fashion is all about feeling good
      <QuotesIcon size={32} weight="fill" />
    </section>
  );
}
