import Link from "next/link";

import classes from "./Header.module.scss";

export default function Header() {
  return (
    <header className={classes.headerSection}>
      <h1 className={classes.title}>Cultivated Cloth, Crafted for Comfort.</h1>
      <Link className={classes.button} href="/shop">
        Shop All
      </Link>
    </header>
  );
}
