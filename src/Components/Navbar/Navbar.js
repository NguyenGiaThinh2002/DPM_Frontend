import React from 'react';
import styles from './Navbar.module.css'
import db from '../../Assets/db48.png'
import { useNavigate } from 'react-router-dom';
function Navbar() {
  const navigate = useNavigate();
  

  return (
    
    <nav>
      <div className={styles.navbarcontainer}>
        <div className={styles.logocontainer}>
          <img className={styles.icon} src={db} alt="Icon" />
          <div className={styles.logo}>Data Sync Management</div>
        </div>
        <div>
            <button onClick={() => console.log("Home clicked")}>Home</button>
          <button onClick={() => console.log("About clicked")}>About</button>
          <button onClick={() => navigate('/')}>Logout</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
