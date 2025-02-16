import React, { useEffect, useState } from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import Sidebar from '../../Components/Sidebar/Sidebar';
import BodyContent from '../../Components/BodyContent/BodyContent';
import styles from './MainPage.module.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../features/user/userSlice';

export default function MainPage() {
    const [selectedForm, setSelectedForm] = useState(null);
    const dispatch = useDispatch();
  
    useEffect(() => {
      dispatch(fetchUsers());
    }, [dispatch]);
  
    const handleLinkClick = (formId) => {
      setSelectedForm(formId);  // Set which form to show
    };
  
    return (
      <div className={styles.app}>
        <Navbar />
        <Sidebar onLinkClick={handleLinkClick} />
        <BodyContent selectedForm={selectedForm} />
      </div>
    );
}
