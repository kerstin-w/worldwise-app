import SideBar from "../../components/SideBar/SideBar";
import Map from "../../components/Map/Map";
import styles from "./Applayout.module.css";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
    </div>
  );
}

export default AppLayout;
