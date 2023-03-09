import React from 'react'
import styles from "@/styles/Layout.module.css";
import { MdAddCircle } from "react-icons/md";
import { useContext } from 'react';
import { NavbarContext } from '@/context/navbarContext';
import { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';


const LayoutContent = ({title, description, buttonTxt,icon, children}) => {

    const { isCollapsed, toggleCollapse } = useContext(NavbarContext);
    useEffect(() => {
        console.log(isCollapsed);
    }, [isCollapsed])

  return (
    <>
    <div className={`${styles.navbar} ${isCollapsed ? styles.navbar_collapsed : ''}`}>
      <Navbar />
    </div>

    <div className={`${styles.content} ${isCollapsed ? styles.content_collapsed : ''}`}>

        <div className={styles.top}>
            <div className={styles.top_info}>
              <h1 className={styles.title}>{title}</h1>
              <h2 className={styles.info}>{description}</h2>
            </div>
            
            {buttonTxt && (
              <button className={styles.new_btn}>
                <span className={styles.btn_icon}>
                  {icon ? (
                    icon
                  ) : (
                    <MdAddCircle
                      size={22}
                      color="#ffff"
                      className={styles.btn_iconn}
                    />
                  )}
                </span>
                {buttonTxt}
              </button>
            )}
        </div>
          
        <div className={styles.children}>
            {children}
        </div>

   </div>
   </>
  )
}

export default LayoutContent