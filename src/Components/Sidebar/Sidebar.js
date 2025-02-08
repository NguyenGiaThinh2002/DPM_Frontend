import React, { useState } from 'react';
import { FaHome, FaCog, FaBook, FaHistory } from 'react-icons/fa';
import styles from './Sidebar.module.css';

function Sidebar({ onLinkClick }) {
  const [activeItem, setActiveItem] = useState('');

  const onItemClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className={styles.sidebar}>
      <div
        className={`${styles.sidebarItem} ${activeItem === 'homeForm' ? styles.active : ''}`}
        onClick={() => {
          onLinkClick('homeForm');
          onItemClick('homeForm');
        }}
      >
        <div className={styles.icon}>
          <FaHome />
        </div>
        <span>Home</span>
      </div>

      <div
        className={`${styles.sidebarItem} ${activeItem === 'settingsForm' ? styles.active : ''}`}
        onClick={() => {
          onLinkClick('settingsForm');
          onItemClick('settingsForm');
        }}
      >
        <div className={styles.icon}>
          <FaCog />
        </div>
        <span>Settings</span>
      </div>

      <div
        className={`${styles.sidebarItem} ${activeItem === 'loggingForm' ? styles.active : ''}`}
        onClick={() => {
          onLinkClick('loggingForm');
          onItemClick('loggingForm');
        }}
      >
        <div className={styles.icon}>
          <FaHistory />
        </div>
        <span>Logging History</span>
      </div>
    </div>

  );
}

export default Sidebar;
