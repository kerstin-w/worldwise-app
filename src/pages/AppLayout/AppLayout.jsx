import styles from "./Applayout.module.css?used";
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
