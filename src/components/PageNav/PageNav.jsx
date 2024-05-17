import { NavLink } from "react-router-dom";

import useAuth from "../../hooks/useAuth";

import styles from "./PageNav.module.css";
import Logo from "../Logo/Logo";

/**
 * The `PageNav` is a navigation component with links to Pricing, Product, and Login
 * pages.
 * @returns The `PageNav` function is returning a navigation component that includes a logo and a list
 * of navigation links. The navigation links include "Pricing", "Product", and a "Login" link styled as
 * a call-to-action button.
 */
function PageNav() {
  const { user } = useAuth();
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          {user ? (
            <p className={styles.ctaLink}>Logged in</p>
          ) : (
            <NavLink to="/login" className={styles.ctaLink}>
              Login
            </NavLink>
          )}
        </li>
      </ul>
    </nav>
  );
}

export default PageNav;
