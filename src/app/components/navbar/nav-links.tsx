import Link from "next/link";

import { siteLinks } from "@/config/links";
import classes from "./Navbar.module.scss";

export default function NavLinks() {
  return (
    <>
      {siteLinks.map((link) => (
        <li key={link.name}>
          <Link href={`${link.path}`} className={classes.navLink}>
            {link.name}
          </Link>
        </li>
      ))}
    </>
  );
}
