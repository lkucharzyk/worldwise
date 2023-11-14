//import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./appLayout.module.css";
import User from "../components/User";

function Layout() {
  return (
    <div className={styles.app}>
      <User />
      <Sidebar />
      <Map />
    </div>
  );
}

export default Layout;
