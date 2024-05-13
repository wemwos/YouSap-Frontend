import React from 'react';
import { FaBell, FaUser } from 'react-icons/fa'; 
import styles from '../css/header.module.css'; 
import Home from '../img/home.png';
import Home2 from '../img/home2.png'; 
import User from '../img/user.png';
import Bell from '../img/bell.png';

function Header({activePage}) {
  return (
    <div className={styles.header}>
      <div className={styles.logoContainer}>
        <img src="/path/to/logo.png" alt="Logo" className={styles.logo} />
        <h5>You<span className={styles.systemName}>Sapp</span></h5>
      </div>
      
      {/* Search bar */}
      <input type="text" placeholder="Search" className={styles.searchBar} />
      
      {/* Home, Profile, and Bell icon */}
      <div className={styles.iconContainer}>
        {/* Using the imported home image */}
        <img src={Home} alt="Home" className={styles.icon} style={activePage === 'home' ? { filter: 'brightness(150%)' } : {}} />
        <img src={User} alt="User" className={styles.icon} />
        <img src={Bell} alt="Bell" className={styles.icon} />
      </div>
      
      {/* Profile settings */}
      <div className={styles.profileSettings}>
        <img src="/path/to/profile-pic.png" alt="Profile" className={styles.profilePic} />
        {/* Dropdown for profile settings */}
        
      </div>
    </div>
  );
}

export default Header;
