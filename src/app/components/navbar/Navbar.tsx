import Link from "next/link";

import ShoppingCartIcon from "../icons/ShoppingCartIcon";
import classes from "./Navbar.module.scss";

const links = [
  // { name: 'Home', path: '/' },
  { name: "lookbook", path: "/lookbook" },
  { name: "about", path: "/about" },
  { name: "contact", path: "/contact" },
  { name: "shop", path: "/shop" },
];

export default function Navbar() {
  return (
    <nav data-testid="navigation" className={classes.nav}>
      <Link href="/">
        <span className={classes.brand}>Batéy</span>
      </Link>
      <ul className={classes.navList}>
        {links.map((link) => (
          <li key={link.name}>
            <Link href={`${link.path}`} className={classes.navLink}>
              {link.name}
            </Link>
          </li>
        ))}
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
