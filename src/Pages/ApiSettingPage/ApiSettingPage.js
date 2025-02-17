import React, { useEffect, useRef, useState } from 'react'
import styles from './ApiSettingPage.module.css'
import settingStyles from '../SettingPage/SettingPage.module.css'
import Collapse from '../../Components/Collapse/Collapse';
import axios from '../../Services/axios'
import { useDispatch, useSelector } from 'react-redux';
import { fetchApiSettings } from '../../features/apiSettings/apiSettingSlice';
import ApiSettingDetail from './ApiSettingDetail';
import { toggleCollapse } from '../../features/common/openCollapse';
import Dialog from '../../Components/Dialog/Dialog';


export default function ApiSettingPage() {
    const [formApiDataSettings, setFormApiDataSettings] = useState({ method: "GET", apiName: '', endPoint: '', params: [{ key: "", value: "" }], jsonBody: '{ " ": " " }', fields: [{ field: "", columnName: "" }], collectionName: ''  });

    const [selectedDetailItem, setSelectedDetailItem] = useState(null);
    const [selectedEditItem, setSelectedEditItem] = useState({});

    const [showDialog, setShowDialog] = useState(false);
    const openDialog = () => setShowDialog(true);
    const closeDialog = () => setShowDialog(false);
    const [successMessage, setSuccessMessage] = useState("Successfull")

    const openApiSettingsDetail = (item) => {
        setSelectedDetailItem(item);
    }

    function onEditButtonClick() {
        setEdit(true);
        dispatch(toggleCollapse());
    }

    const [isEdit, setEdit] = useState(false);

    const editApiSetting = (item) => {
        setSelectedEditItem(item);
        // Create a clone of the item
        const clonedItem = { ...item };
    
        // If fields or params are objects/arrays, ensure deep cloning if necessary
        clonedItem.fields = [...(item.fields || [])]; // Clone fields array
        clonedItem.params = [...(item.params || [])]; // Clone params array
    
        setFormApiDataSettings(clonedItem);
        setFieldRows(clonedItem.fields);
        setParamsRows(clonedItem.params);

        onEditButtonClick();
    };

    const clearFields = () =>{
        setFormApiDataSettings({ method: "GET", apiName: '', endPoint: '' , jsonBody: '{ " ": " " }', collectionName: ''  });
        // , params: [{ key: "", value: "" }], fields: [{ field: "", columnName: "" }]
        setFieldRows([{ field: "", columnName: "" }]);
        setParamsRows([{ key: "", value: "" }]);
        setSelectedEditItem({});
    }
    

    const users = useSelector((state) => state.user.users);

    const apiSettings = useSelector((state) => state.apiSetting.apiSettings);

    const dispatch = useDispatch();
    const [render, setRender] = useState(false);
    const reSetRender = () => {
        setRender(!render);
    }

    useEffect(() => {
        dispatch(fetchApiSettings());
    }, [dispatch, render]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormApiDataSettings({ ...formApiDataSettings, [name]: value });
    };
    const [fieldRows, setFieldRows] = useState([{ field: "", columnName: "" }]);

    const handleTableChange = (e, index, field) => {
        // const newRows = [...fieldRows];
        // newRows[index][field] = e.target.value;
        // setFieldRows(newRows);

        const newRows = fieldRows.map((row, i) => (
            i === index ? { ...row } : row
        ));

        newRows[index][field] = e.target.value;
        setFieldRows(newRows);
    };

    const handleAddRow = () => {
        setFieldRows([...fieldRows, { field: "", columnName: "" }]);
    };

    const handleDeleteRow = (index) => {
        if (fieldRows.length > 1) {
            const newRows = [...fieldRows];
            newRows.splice(index, 1);
            setFieldRows(newRows);
        }
    };

    const [paramsRows, setParamsRows] = useState([{ key: "", value: "" }]);

    const handleParamsTableChange = (e, index, field) => {
        const newRows = paramsRows.map((row, i) =>
            i === index ? { ...row } : row // Clone only the row being updated
        );
    
        newRows[index][field] = e.target.value; // Safely update the specific field
        setParamsRows(newRows);
    };
    

    const handleParamsAddRow = () => {
        setParamsRows([...paramsRows, { key: "", value: "" }]);
    };

    const handleParamsDeleteRow = (index) => {
        if (paramsRows.length > 1) {
            const newRows = [...paramsRows];
            newRows.splice(index, 1);
            setParamsRows(newRows);
        }
    };

    const createApiSetting = async () => {
        try {
            formApiDataSettings.fields = fieldRows;
            formApiDataSettings.params = paramsRows;
            const res = await axios.post(`/apiSettings/createApiSettings/${users._id}`, formApiDataSettings);
            setSuccessMessage("Create API successfully");
            openDialog();
            clearFields();
            reSetRender();
        } catch (error) {
            console.log("apiSetting failed", error);
        }
    }

    const saveApiSetting = async () => {
        try {
            formApiDataSettings.fields = fieldRows;
            formApiDataSettings.params = paramsRows;
            const res = await axios.post(`/apiSettings/editApiSettings/${selectedEditItem._id}`, formApiDataSettings);
            setSuccessMessage("Edit API successfully");
            openDialog();
            reSetRender();
        } catch (error) {
            console.log("saveApiSetting failed", error);
        }
    }

    const deleteApiSetting = async (item) => {
        try {
            const res = await axios.post(`/apiSettings/deleteApiSettings/${item._id}`);
            setSuccessMessage("Delete API successfully");
            clearFields();
            openDialog();
            reSetRender();
            setEdit(false) ;
        } catch (error) {
            console.log("saveApiSetting failed", error);
        }
    }

    return (
        <div className={styles.content} >
            <div>
                <div className={settingStyles.setting}>API SETTINGS</div>

                <Collapse title="API Settings" className={styles.apiSetupArea} >
                    <div className={styles.endPoint}>
                        <div className={styles.contentTitle}>API Name: </div>
                        <div className={settingStyles.formgroup}>
                            <span>Name</span>
                            <input
                                value={formApiDataSettings.apiName}
                                name="apiName"
                                onChange={handleChange}
                                className={settingStyles.formfield}
                                type="text"
                                placeholder="Get Server Data"
                            />
                        </div>
                    </div>

                    <div className={styles.endPoint}>
                        <div className={styles.contentTitle}>API Endpoint: </div>
                        <div className={settingStyles.formgroup}>
                            <span>Endpoint</span>
                            <input
                                value={formApiDataSettings.endPoint}
                                name="endPoint"
                                onChange={handleChange}
                                className={settingStyles.formfield}
                                type="text"
                                placeholder="/data/id"
                            />
                        </div>
                    </div>

                    <div className={styles.method}>
                        <div className={styles.contentTitle}>API Method: </div>
                        <select id="ampm" className={settingStyles.ampm} onChange={handleChange} name='method' value={formApiDataSettings.method}>
                            <option value="GET">GET</option>
                            <option value="POST">POST</option>
                            <option value="PUT">PUT</option>
                            <option value="DELETE">DELETE</option>
                        </select>

                    </div>

                    <div className={styles.params}>
                        <div className={styles.contentTitle}>API Params: </div>

                        <table className={styles.table}>
                            <thead>
                                <tr>
                                    <th>Index</th>
                                    <th>Key</th>
                                    <th>Value</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {paramsRows?.map((row, index) => (
                                    <tr key={index}>
                                        <td>
                                            <div>{index + 1}</div>
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.key}
                                                onChange={(e) => handleParamsTableChange(e, index, "key")}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="text"
                                                value={row.value}
                                                onChange={(e) => handleParamsTableChange(e, index, "value")}
                                            />
                                        </td>
                                        <td>
                                            <div className={styles.actionButtons}>
                                                <button
                                                    className={styles.addButton}
                                                    onClick={handleParamsAddRow}
                                                >
                                                    +
                                                </button>

                                                <button
                                                    className={styles.deleteButton}
                                                    onClick={() => handleParamsDeleteRow(index)}
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    <div className={styles.apiBody}>
                        <div className={styles.contentTitle}>API Body: </div>
                        <div className={styles.bodySection}>
                            {/* <h3>Body</h3> */}
                            <textarea
                                className={styles.jsonBodyInput}
                                value={formApiDataSettings.jsonBody}
                                name='jsonBody'
                                onChange={handleChange}
                                placeholder='{"key": "value"}'
                            />

                        </div>

                    </div>

                    <div className={styles.apiFields}>
                        <div className={styles.contentTitle}>API Fields: </div>
                        <div className={styles.tableContainer}>
                            {/* <h2>Fields Table</h2> */}
                            <table className={styles.table}>
                                <thead>
                                    <tr>
                                        <th>Index</th>
                                        <th>Field</th>
                                        <th>Column Name</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {fieldRows?.map((row, index) => (
                                        <tr key={index}>
                                            <td>
                                                <div>{index + 1}</div>
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={row.field}
                                                    onChange={(e) => handleTableChange(e, index, "field")}
                                                />
                                            </td>
                                            <td>
                                                <input
                                                    type="text"
                                                    value={row.columnName}
                                                    onChange={(e) => handleTableChange(e, index, "columnName")}
                                                />
                                            </td>
                                            <td >
                                                <div className={styles.actionButtons}>
                                                    <button
                                                        className={styles.addButton}
                                                        onClick={handleAddRow}
                                                    >
                                                        +
                                                    </button>

                                                    <button
                                                        className={styles.deleteButton}
                                                        onClick={() => handleDeleteRow(index)}
                                                    >
                                                        -
                                                    </button>
                                                </div>
                                            </td>

                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                    </div>

                    <div className={styles.collectionName}>
                        <div className={styles.contentTitle}>Collection Name: </div>
                        <div className={settingStyles.formgroup}>
                            <span>Collection</span>
                            <input
                                value={formApiDataSettings.collectionName}
                                name="collectionName"
                                onChange={handleChange}
                                className={settingStyles.formfield}
                                type="text"
                                placeholder="User"
                            />
                        </div>

                    </div>

                    <div className={styles.buttons}>
                        {!isEdit ?  <><button className={styles.createButton} onClick={createApiSetting} >CREATE</button></> : 
                        <>
                            <button className={styles.saveButton} onClick={saveApiSetting} >SAVE</button>
                            <button className={styles.closeButton} onClick={() => {setEdit(false) ; dispatch(toggleCollapse()); clearFields();}} >CLOSE</button>
                        </>}
                        
                    </div>
                </Collapse>

                <div>
                    <div className={settingStyles.setting} style={{margin: "20px"}}>API LIST</div>

                    <div className={styles.apiSettingsDisplay}>
                        {apiSettings?.map((apiSetting, index) => (
                            <div key={index} className={styles.apiSetting}>
                                <div className={styles.apiName}>{index + 1}: {apiSetting.apiName}</div>
                                <div style={{ display: "flex" }}>
                                    <button className={styles.detailButton} onClick={() => openApiSettingsDetail(apiSetting)}>
                                        View Details
                                    </button>
                                    <button className={styles.editButton} onClick={() => { editApiSetting(apiSetting);}}>
                                        Edit
                                    </button>
                                    <button className={styles.deleteButton} onClick={() => { deleteApiSetting(apiSetting);}}>
                                        Delete
                                    </button>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            {selectedDetailItem && <ApiSettingDetail data={selectedDetailItem} setSelectedItem={setSelectedDetailItem} dataColumns={Object.keys(selectedDetailItem)} />}
            {showDialog && <Dialog message={successMessage} onClose={closeDialog} />}
        </div>
    )
}

  // const jsonObject = JSON.parse(formApiDataSettings.jsonBody);
            // console.log("jsonObject: ", jsonObject);

{/* <div style={{ margin: "0px", display: "flex" }}>
    <div className={settingStyles.formgroup} style={{ margin: "0px 20px 0px 0px", display: "flex" }}>
        <span>Key</span>
        <input
            value={formApiDataSettings.paramKey}
            name="paramKey"
            onChange={handleChange}
            className={settingStyles.formfield}
            type="text"
            placeholder="Key"
        />

    </div>

    <div className={settingStyles.formgroup}>
        <span>Value</span>
        <input
            value={formApiDataSettings.paramValue}
            name="paramValue"
            onChange={handleChange}
            className={settingStyles.formfield}
            type="text"
            placeholder="Value"
        />

    </div>
</div> */}