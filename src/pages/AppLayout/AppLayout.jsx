//import styles from "./Applayout.module.css";
import SideBar from "../../components/SideBar/SideBar";
import Map from "../../components/Map/Map";
import User from "../../components/User/User";

function AppLayout() {
  return (
    <div>
      <SideBar />
      <Map />
      <User />
    </div>
  );
}

export default AppLayout;
