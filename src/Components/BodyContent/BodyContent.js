import React, { useEffect, useState } from 'react';
import styles from './BodyContent.module.css';
import DataTable from '../../Components/DataTable/DataTable';
import SettingPage from '../../Pages/SettingPage/SettingPage';
import LoggingPage from  '../../Pages/LogHistoryPage/LogHistoryPage';

function BodyContent({ selectedForm }) {
  const [isDisabled, setIsDisabled] = useState(true);

  const [data, setData] = useState([]);
  const [dataName, setDataName] = useState("Content Database");
  const [dataColumns, setDataColumns] = useState(["ID", "Name", "Email", "Phone"]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch data from server
    // fetch('https://your-api-endpoint.com/data') // Replace with your API endpoint
    //   .then((response) => response.json())
    //   .then((data) => {
    //     setData(data);
    //     setLoading(false);
    //   })
    //   .catch((error) => {
    //     console.error('Error fetching data:', error);
    //     setLoading(false);
    //   });
      const simulatedData = [
        { id: 1, name: 'John Doe', email: 'johndoe@example.com', phone: '123-456-7890' },
        { id: 2, name: 'Jane Smith', email: 'janesmith@example.com', phone: '987-654-3210' },
        { id: 3, name: 'Alice Johnson', email: 'alicej@example.com', phone: '555-123-4567' },
        { id: 4, name: 'Bob Brown', email: 'bobbrown@example.com', phone: '444-987-6543' }
      ];

      // Simulate a delay to mimic fetching data from a server
      setTimeout(() => {
        setData(simulatedData);
        setLoading(false);
      }, 1000); // Delay for 1 second
  }, []);

  // if (loading) {
  //   return <div className={styles.loading}>Loading...</div>;
  // }

  return selectedForm === 'settingsForm' ? (
    <div className={styles.bodyContent}>
      <div className={styles.content}>
        <SettingPage />
      </div>
    </div>
  ) : selectedForm === 'loggingForm' ? (
    <div className={styles.bodyContent}>
      <div className={styles.content}>
        <LoggingPage />
      </div>
    </div>
  ) : (
    <div className={styles.bodyContent}>
      <div className={styles.content}>
        {/* <button>Synchronize Data</button> */}
        {loading ? <div style={{marginTop: "150px"}}>Loading...</div> : <DataTable data={data} dataName={dataName} dataColumns={dataColumns}/>}
      </div>
    </div>
  );
}

export default BodyContent;
