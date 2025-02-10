import React, { useState } from 'react';
import styles from './DataTable.module.css';
import { FaEllipsisV } from 'react-icons/fa';
import DataDetail from '../DataDetail/DataDetail';

const DataTable = ({data,dataColumns, dataName }) => {
  // if (loading) {
  //   return <div className={styles.loading}>Loading...</div>;
  // }

  const [selectedItem, setSelectedItem] = useState(null);

  const openDetailData = (item) =>{
    setSelectedItem(item);
  }

  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.title}>{dataName}</h1>
      <table className={styles.table}>
        <thead>
             {/* {dataColumns?.map((columnName) => {
              return <th key={columnName}>{columnName}</th>;
              })} */}
          <tr>
            {dataColumns?.map((columnName,index) =>(
              <th key={index}>{columnName}</th>
            ))}
          </tr>

        </thead>
        <tbody>
        {data?.map((item, index) => (
          <tr key={index}>
            {Object.values(item).map((value, idx) => (
              <td key={idx}>{value}</td>
            ))}
            <td key={index}>
              <button className={styles.button} onClick={() => openDetailData(item)}> <FaEllipsisV/></button>
            </td>
          </tr>
        ))}
        </tbody>
      </table>
      {selectedItem && <DataDetail item={selectedItem} setSelectedItem={setSelectedItem} dataColumns={dataColumns}/>}
    </div>
  );
};

export default DataTable;
