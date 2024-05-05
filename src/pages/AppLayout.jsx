import SideBar from "../components/SideBar";
import styles from "./Applayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
    </div>
  );
}

export default AppLayout;
