import React, { useEffect, useState } from "react";
import styles from './DataDetail.module.css'
import axios from '../../Services/axios'

export default function DataDetail({ item, setSelectedItem, dataColumns }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`/loggings/getLoggingByID/${item._id}`);
                console.log("this logging", res);
                setData(res.data.data);
            } catch (err) {
                console.log("this error", err);
            }
        };

        if (item?._id) {
            fetchData();
        }
    }, [item._id]);

    return (
        <div>
            <div
                className={styles.dataDetail}
            >
                <div className={styles.dataDetailText}>
                    Data Detail
                </div>
                <table>
                    <tbody>
                        {Object.values(item).slice(2).map((value, idx) => (
                            <tr key={idx} >
                                <td className={styles.dataColumns}>{dataColumns[idx].toUpperCase()}: </td>
                                <td className={styles.dataValues}>{value}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <pre className={styles.jsonDisplay}>
                    {JSON.stringify(data, null, 2)}
                </pre>
                <button className={styles.button} onClick={() => setSelectedItem(null)} style={{ marginTop: "10px" }}>
                    Close
                </button>
            </div>
            <div
                onClick={() => setSelectedItem(null)}
            />

        </div>
    );
}
