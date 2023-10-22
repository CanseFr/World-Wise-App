import styles from "./Sidebar.module.css";
import Logo from "../logo/Logo.jsx";
import AppNav from "../app-nav/AppNav.jsx";
import {Outlet} from "react-router-dom";

export default function Sidebar() {
  return (
    <div className={styles.sidebar}>
        <Logo/>
        <AppNav/>

        <Outlet/>

        <footer className={styles.footer}>
            <p className={styles.copyright}>&copy; {new Date().getFullYear()} by Worldwise Inc.</p>
        </footer>
    </div>
  );
}

