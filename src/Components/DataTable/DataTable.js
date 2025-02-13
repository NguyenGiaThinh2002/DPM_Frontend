import React, { useEffect, useState } from 'react';
import styles from './DataTable.module.css';
import { FaEllipsisV } from 'react-icons/fa';
import DataDetail from '../DataDetail/DataDetail';

const DataTable = ({ data, dataName }) => {
  // if (loading) {
  //   return <div className={styles.loading}>Loading...</div>;
  // }

  useEffect(() => {
    console.log("data", data);
  }, []);

  const [selectedItem, setSelectedItem] = useState(null);
  // if (data?.length === 0) {
  //   return;
  // }

  const openDetailData = (item) => {
    setSelectedItem(item);
  }
  // const headers = Object.keys(data[0]);

  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.title}>{dataName}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>INDEX</th>
            {data && Object.keys(data[0])?.slice(2)?.map((header, index) => (
              <th key={index} style={{ padding: "8px", textAlign: "center" }}>{header.toUpperCase()}</th>
            ))}
            <th>DETAIL</th>
          </tr>

        </thead>
        <tbody>


          {data?.slice(0).reverse().map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              {data && Object.keys(data[0])?.slice(2)?.map((header) => (
                <td key={header} style={{ padding: "8px", textAlign: "center" }}>
                  {row[header] ?? "N/A"}
                </td>
              ))}
              <td>
                <button className={styles.button} onClick={() => openDetailData(data[index])}> <FaEllipsisV /></button>
              </td>
            </tr>
          ))}

        </tbody>
      </table>
      {selectedItem && <DataDetail item={selectedItem} setSelectedItem={setSelectedItem} dataColumns={Object.keys(data[0])?.slice(2)} />}
    </div>
  );
};

export default DataTable;
