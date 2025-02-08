import React, { useState } from 'react';
import styles from './Collapse.module.css'; // Import your styles
import { FaArrowRight , FaArrowDown  } from 'react-icons/fa';
// Collapse component for any content
const Collapse = ({ title, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(true);

    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState);
    };

    return (
        <div className={styles.collapseContainer}>
            <div className={styles.setting} onClick={toggleCollapse}>
                <div className={styles.title}>{title}</div>
                
                <span className={styles.arrow}>
                    {isCollapsed ? <FaArrowDown/> : <FaArrowRight/>}
                </span>
            </div>
            <div className={`${styles.collapseContent} ${isCollapsed ? styles.collapsed : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
