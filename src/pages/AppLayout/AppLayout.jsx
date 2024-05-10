import styles from "@/pages/AppLayout/AppLayout.module.css";
import SideBar from "../../components/SideBar/SideBar";
import Map from "../../components/Map/Map";
import User from "../../components/User/User";

function AppLayout() {
  return (
    <div className={styles.app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
