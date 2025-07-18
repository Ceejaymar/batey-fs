import Link from "next/link";

import { siteLinks, socialLinks } from "@/config/links";
import classes from "./footer.module.scss";

export default function Footer() {
  return (
    <section data-testid="footer" className={classes.footerSection}>
      <div className={classes.subscribeContent}>
        <h4>Subscribe to our newsletter</h4>
        <p>Sign up and receive news, updates and product information.</p>
        <form className={classes.form}>
          <input type="email" placeholder="Email address" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className={classes.siteContent}>
        <div className={classes.aboutContent}>
          <h4>site map</h4>
          <ul>
            {siteLinks.map((link) => (
              <li key={link.name}>
                <Link href={link.path}>{link.name}</Link>
              </li>
            ))}
          </ul>
        </div>
        <div className={classes.contactContent}>
          <h4>follow us</h4>
          <ul>
            {socialLinks.map((link) => (
              <li key={link.name}>
                <a href={link.path} target="_blank" rel="noopener noreferrer">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <span className={classes.footerBrand}>batéy</span>
    </section>
  );
}
