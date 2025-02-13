import React, { useEffect, useState } from 'react';
import styles from './Collapse.module.css'; // Import your styles
import { FaArrowRight , FaArrowDown  } from 'react-icons/fa';
import { useSelector } from 'react-redux';
// Collapse component for any content
const Collapse = ({ title, children }) => {
    const [isThisCollapsed, setIsCollapsed] = useState(true);

    const isCollapsed = useSelector((state) => state.collapse.isCollapsed);
    
    const toggleCollapse = () => {
        setIsCollapsed(prevState => !prevState);
    };

    useEffect(() => {
        setIsCollapsed(false);
    }, [isCollapsed])

    

    return (
        <div className={styles.collapseContainer}>
            <div className={styles.setting} onClick={toggleCollapse}>
                <div className={styles.title}>{title}</div>
                
                <span className={styles.arrow}>
                    {isThisCollapsed ? <FaArrowDown/> : <FaArrowRight/>}
                </span>
            </div>
            <div className={`${styles.collapseContent} ${isThisCollapsed ? styles.collapsed : ''}`}>
                {children}
            </div>
        </div>
    );
};

export default Collapse;
