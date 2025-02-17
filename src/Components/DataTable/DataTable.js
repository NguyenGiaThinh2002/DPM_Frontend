import React, { useEffect, useState } from 'react';
import styles from './DataTable.module.css';
import { FaEllipsisV } from 'react-icons/fa';
import DataDetail from '../DataDetail/DataDetail';

const DataTable = ({ data, dataName }) => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 30;

  // useEffect(() => {
  //   console.log("data", data);
  // }, [data]);

  const openDetailData = (item) => {
    setSelectedItem(item);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data?.length / itemsPerPage);

  const paginatedData = data?.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={styles.tableContainer}>
      <h1 className={styles.title}>{dataName}</h1>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>INDEX</th>
            {data && Object.keys(data[0])?.slice(2)?.map((header, index) => (
              <th key={index} style={{ padding: "8px", textAlign: "center" }}>
                {header.toUpperCase()}
              </th>
            ))}
            <th>DETAIL</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData?.reverse().map((row, index) => (
            <tr key={index}>
              <td>{(currentPage - 1) * itemsPerPage + index + 1}</td>
              {data && Object.keys(data[0])?.slice(2)?.map((header) => (
                <td key={header} style={{ padding: "8px", textAlign: "center" }}>
                  {row[header] ?? "N/A"}
                </td>
              ))}
              <td>
                <button className={styles.button} onClick={() => openDetailData(row)}>
                  <FaEllipsisV />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {selectedItem && <DataDetail item={selectedItem} setSelectedItem={setSelectedItem} dataColumns={Object.keys(data[0])?.slice(2)} />}

      <div className={styles.pagination}>
        <button
          disabled={currentPage === 1}
          onClick={() => handlePageChange(currentPage - 1)}
        >
          Previous
        </button>
        <span>{`Page ${currentPage} of ${totalPages}`}</span>
        <button
          disabled={currentPage === totalPages}
          onClick={() => handlePageChange(currentPage + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default DataTable;
