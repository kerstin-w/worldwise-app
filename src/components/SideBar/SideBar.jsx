import { Outlet } from "react-router-dom";

import AppNav from "../AppNav/AppNav";
import Footer from "../Footer/Footer";
import Logo from "../Logo/Logo";
import styles from "@/components/SideBar/SideBar.module.css";

/**
 * The SideBar represents part of the layout. It includes the Logo
 * component, AppNav component, Outlet component (used for nested routing),
 * and Footer component all wrapped inside a div element
 */
function SideBar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <Outlet />
      <Footer />
    </div>
  );
}

export default SideBar;
