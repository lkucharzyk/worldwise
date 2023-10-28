//import AppNav from "../components/AppNav";
import Sidebar from "../components/Sidebar";
import Map from "../components/Map";
import styles from "./appLayout.module.css";

function Layout() {
  return (
    <div className={styles.app}>
      <Sidebar />
      <Map />
    </div>
  );
}

export default Layout;
