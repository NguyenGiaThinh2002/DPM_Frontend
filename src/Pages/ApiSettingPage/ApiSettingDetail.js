import React, { useEffect, useState } from "react";
import styles from '../../Components/DataDetail/DataDetail.module.css'
import axios from "../../Services/axios";
export default function ApiSettingDetail({ data, setSelectedItem, dataColumns }) {
    // const [data, setData] = useState([]);

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const res = await axios.get(`/apiSettings/getApiSettingsByID/${item._id}`);
    //             console.log("this logging", res);
    //             setData(res.data);
    //         } catch (err) {
    //             console.log("this error", err);
    //         }
    //     };

    //     if (item?._id) {
    //         fetchData();
    //     }
    // }, [item._id]);

    // useEffect(() => {
    //     console.log("this is data", data);
    // }, [data])

    return (
        <div>
            <div
                className={styles.dataDetail}
            >
                <div className={styles.dataDetailText}>
                    Api Setting Details
                </div>
                <table>
                    {/* <tbody>
                        {Object.values(data).map((value, idx) => (
                            <tr key={idx} >
                                <td className={styles.dataColumns}>{dataColumns[idx].toUpperCase()}: </td>

                                <td className={styles.dataValues}>{JSON.stringify(value)}</td>
                            </tr>
                        ))}
                    </tbody> */}
                </table>
                <pre className={styles.jsonDisplay} style={{minHeight: "700px", color: "#FFFFF"}}>
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
