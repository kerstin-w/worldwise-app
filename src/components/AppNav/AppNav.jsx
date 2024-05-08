import { NavLink } from "react-router-dom";

import styles from "./AppNav.module.css";

/**
 * The AppNav renders a navigation bar with links to "Cities" and "Countries".
 * @returns The `AppNav` component is being returned. It is a navigation component that renders a
 * `<nav>` element with a list of links to "Cities" and "Countries".
 */
function AppNav() {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <NavLink to="cities">Cities</NavLink>
        </li>
        <li>
          <NavLink to="countries">Countries</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default AppNav;
