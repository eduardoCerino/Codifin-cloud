import React, { useEffect, useContext } from "react";
import styles from "@/styles/Layout.module.css";
import Navbar from "../Navbar/Navbar";
import { NavbarProvider} from "../../context/navbarContext";
import LayoutContent from './LayoutContent';


const Layout = ({ children, title, description, buttonTxt, icon }) => {

 const layoutProps = { children, title, description, buttonTxt, icon };



  return (
    <NavbarProvider>
        <main className={styles.main}>
            <LayoutContent {...layoutProps} />
        </main>
      </NavbarProvider>

  );
};

export default Layout;
