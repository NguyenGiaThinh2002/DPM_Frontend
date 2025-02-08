import React, { useState } from "react";
import styles from './DataDetail.module.css'

export default function DataDetail({ item, setSelectedItem, dataColumns }) {
    //   const [isOpen, setIsOpen] = useState(true);

    const data = [
        { Index: 1, URL: "https//:server.com/data", Datetime: "nowString", Mode: "Auto", Status: "Successful" },
        { Index: 2, URL: "https//:server.com/data", Datetime: "nowString", Mode: "Manual", Status: "Successful" },
        { Index: 3, URL: "https//:server.com/data", Datetime: "nowString", Mode: "Auto", Status: "Failed" },
        { Index: 4, URL: "https//:server.com/data", Datetime: "nowString", Mode: "Auto", Status: "Successful" },
        // { Index: 5, URL: "https//:server.com/data", Datetime: "nowString", Mode: "Auto", Status: "Successful" },
        // { Index: 6, URL: "https//:server.com/data", Datetime: "nowString", Mode: "Auto", Status: "Successful" },
        // { Index: 7, URL: "https//:server.com/data", Datetime: "nowString", Mode: "Manual", Status: "Successful" }
    ];

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
                        {Object.values(item).map((value, idx) => (
                            <tr key={idx} >
                                <td className={styles.dataColumns}>{dataColumns[idx]}: </td>
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
