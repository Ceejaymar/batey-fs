import Link from "next/link";

import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import classes from "./Navbar.module.scss";
import NavLinks from "./nav-links";

export default function Navbar() {
  return (
    <nav data-testid="navigation" className={classes.nav}>
      <Link href="/">
        <span className={classes.brand}>Batéy</span>
      </Link>
      <ul className={classes.navList}>
        <NavLinks />
      </ul>
      <div className={classes.cartContainer}>
        <Link href="cart">
          <ShoppingCartIcon
            aria-label="View shopping cart"
            size={24}
            weight="regular"
            color="blue"
          />
        </Link>
      </div>
    </nav>
  );
}
