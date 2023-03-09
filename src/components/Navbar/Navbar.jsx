import React, {useContext, useState} from 'react'
import styles from '@/styles/Navbar.module.css'
import { navbar } from '../../data/navbar';
import { NavbarContext } from "../../context/navbarContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGraduationCap, faChartPie, faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { useRouter } from 'next/router';



const Navbar = () => {
  
  const { isCollapsed, toggleCollapse } = useContext(NavbarContext);

  const router = useRouter();
  const handleRoute = (route) => {
    router.push(route);
  };

    return (
      <div className={`${styles.main} ${isCollapsed ? styles.collapsed : ''}`}>
        <div className={styles.close_btn}>
          <button className={styles.circle} onClick={toggleCollapse}></button>
          <button className={styles.circle} onClick={toggleCollapse}></button>
          <button className={styles.circle} onClick={toggleCollapse}></button>
        </div>
  
        <div className={`${styles.top} ${isCollapsed && styles.top_collapsed}`}>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/2048px-Spotify_logo_without_text.svg.png"
            alt="google"
            className={`${styles.logo_bar} ${isCollapsed ? styles.logobar_collapsed : ''}`}          />
          <div>
            <p className={`${styles.welcome} ${isCollapsed ? styles.welcome_collapsed : ''}`}>Good Day 👋 </p>
            <p className={`${styles.user} ${isCollapsed ? styles.user_collapsed : ''}`}>Stryke</p>
          </div>
        </div>
  
        <div className={styles.options}>
          {
            navbar.map((item, index) => {
              return (
                <button
                 className={`${styles.options__item} ${isCollapsed ? styles.options__item_collapsed : ''}`}
                 key={index}
                 onClick={() => handleRoute(item.route)}
                 >
                  <span className={`${styles.icon_bar} ${isCollapsed ? styles.iconbar_collapsed : ''}`}>
                      {item.icon === 'faGraduationCap' &&  <FontAwesomeIcon icon={faGraduationCap} className={styles.icon}/>}
                      {item.icon === 'faFileCircleCheck' && <FontAwesomeIcon icon={faFileCircleCheck} className={styles.icon}/>}
                      {item.icon === 'faChartPie' && <FontAwesomeIcon icon={faChartPie} className={styles.icon}/>}
                  </span>
                  <p className={`${styles.text} ${isCollapsed ? styles.text_collapsed : ''}`}>{item.name}</p>
                </button>
              );
              })}
        </div>
  
        <div className={styles.bottom}>
          <img
            src="https://uploads-ssl.webflow.com/63b4bdea9865273fd745b3af/63b4bdea9865273cf545b3d1_Asset%206%403x.png"
            alt="Logo codifin"
            className={`${styles.logo_codifin} ${isCollapsed ? styles.logo_collapsed : ''}`}
          />
          <p className={`${styles.codifin_text} ${isCollapsed ? styles.codifin_text_collapsed : ''}`}>
            Powered by Codifin 
          </p>
        </div>
      </div>

    );
  };
  
  export default Navbar;