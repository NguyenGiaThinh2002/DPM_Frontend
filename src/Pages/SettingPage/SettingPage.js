import React, { useEffect, useState } from 'react'
import styles from './SettingPage.module.css';
import Collapse from '../../Components/Collapse/Collapse';
import axios from '../../Services/axios';
import { useDispatch, useSelector } from "react-redux";
import { fetchSettings } from '../../features/settings/settingSlice';
import Dialog from '../../Components/Dialog/Dialog';


export default function SettingPage() {
  const [isDisabled, setIsDisabled] = useState(true);
  const [errors, setErrors] = useState({});
  const users = useSelector((state) => state.user.users);
  const settings = useSelector((state) => state.setting.settings);
  const [formDataSettings, setFormDataSettings] = useState({});

  const [showDialog, setShowDialog] = useState(false);

  const openDialog = () => setShowDialog(true);
  const closeDialog = () => setShowDialog(false);


  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchSettings());
  }, [dispatch]);

  useEffect(() => {
    setFormDataSettings({
      serverUrl: settings.serverUrl || "",
      serverPort: settings.serverPort || "",
      databaseUrl: settings.databaseUrl || "",
      databaseName: settings.databaseName || "",
      collectionName: settings.collectionName || "",
      periodicTime: settings.periodicTime || "",
      cycleTime: settings.cycleTime || "",
    });
  }, [settings]);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormDataSettings({ ...formDataSettings, [name]: value });

    // Validate form on change
    const validationErrors = validate({ ...formDataSettings, [name]: value });
    setErrors(validationErrors);
    setIsDisabled(Object.keys(validationErrors).length > 0);
  };

  const validate = (data) => {
    let newErrors = {};
    if (!data.serverUrl) newErrors.serverUrl = "Server URL is required";
    if (!data.serverPort) newErrors.serverPort = "Server Port is required";
    if (!data.databaseUrl) newErrors.databaseUrl = "Database URL is required";
    if (!data.databaseName) newErrors.databaseName = "Database Name is required";
    if (!data.collectionName) newErrors.collectionName = "Collection Name is required";
    if (!data.periodicTime) newErrors.periodicTime = "Periodic Time is required";
    if (!data.cycleTime) newErrors.cycleTime = "Cycle Time is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate(formDataSettings);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    } else {
      saveSetting();
      // dispatch(fetchSettings());
    }
    console.log("Form Submitted", formDataSettings);
  };

  const saveSetting = async () => {
    try {
      //const user = "67a97d2b460db19480fce72c";
      await axios.post(`http://localhost:5080/settings/createSettings/${users._id}`, formDataSettings);
      console.log("SUCCESSFUL");
      openDialog();
    } catch (error) {
      console.log("FAILED", error);
    }
  };

  return (
    <div className={styles.content} >

      <div className={styles.setting}>SETTINGS</div>
      <div className={styles.settingBody}>
        <Collapse className={styles.serverSetting} title='Server Settings'>
          <div className={styles.server}>
            {/* <div className={styles.setting}>Server Settings</div> */}
            <div className={styles.text}>Enter Server URL:</div>
            <div className={styles.formgroup}>
              <span>https://</span>
              <input
                value={formDataSettings.serverUrl}
                name="serverUrl"
                onChange={handleChange}
                className={styles.formfield}
                type="text"
                placeholder="server.com"
              />
              {errors.serverUrl && <p className="error">{errors.serverUrl}</p>}
              {/* <button>Enter</button> */}
            </div>

            <div className={styles.text}>Enter Port:</div>
            <div className={styles.formgroup}>
              <span>Port</span>
              <input
                value={formDataSettings.serverPort}
                name="serverPort"
                onChange={handleChange}
                className={styles.formfield}
                type="text"
                placeholder="5000"
              />
              {errors.serverPort && <p className="error">{errors.serverPort}</p>}
            </div>

          </div>
        </Collapse >

        <Collapse className={styles.databaseSettings} title='Database Settings'>
          <div className={styles.database}>
            <div className={styles.text}>Enter Database URL:</div>

            <div className={styles.formgroup}>
              <span>https://</span>
              <input
                value={formDataSettings.databaseUrl}
                name="databaseUrl"
                onChange={handleChange}
                className={styles.formfield}
                type="text"
                placeholder="server.com"
              />
              {errors.databaseUrl && <p className="error">{errors.databaseUrl}</p>}
            </div>

            <div className={styles.text}>Enter Database Name:</div>
            <div className={styles.formgroup}>
              <span>Database</span>
              <input
                value={formDataSettings.databaseName}
                name="databaseName"
                onChange={handleChange}
                className={styles.formfield}
                type="text"
                placeholder="SyncDatabase"
              />
              {errors.databaseName && <p className="error">{errors.databaseName}</p>}
            </div>


            <div className={styles.text}>Enter Collection Name:</div>
            <div className={styles.formgroup}>
              <span>Collection</span>
              <input
                value={formDataSettings.collectionName}
                name="collectionName"
                onChange={handleChange}
                className={styles.formfield}
                type="text"
                placeholder="User"
              />
              {errors.collectionName && <p className="error">{errors.collectionName}</p>}
            </div>

          </div>
        </Collapse>

        <Collapse className={styles.scheduleSettings} title='Schedule Settings'>
          {/* <div className={styles.setting}>Schedule Settings</div> */}
          <div className={styles.schedule}>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className={styles.text}>Enter Synchronized Periodic Time:</div>
              {/* <select id="ampm" className={styles.ampm} onChange={handleSelectChange} value={ampm}> 
                <option value="AM">AM</option>
                <option value="PM">PM</option>
              </select> */}
              {/* <div className={styles.text}>everyday</div> */}
            </div>

            <div className={styles.formgroup}>
              <span>Sync Time</span>

              <input
                value={formDataSettings.periodicTime}
                name="periodicTime"
                onChange={handleChange}
                className={styles.formfield}
                type="text"
                placeholder="Enter time (1 - 24, where 15 = 3 PM)" 
              />
              {errors.periodicTime && <p className="error">{errors.periodicTime}</p>}
            </div>

            <div className={styles.text}>Enter Synchronized Cycle Time:</div>
            <div className={styles.formgroup}>
              <span>Sync Time</span>
              <input
                value={formDataSettings.cycleTime}
                name="cycleTime"
                onChange={handleChange}
                className={styles.formfield}
                type="text"
                placeholder="5 seconds"
              />
              {errors.cycleTime && <p className={styles.error}>{errors.cycleTime}</p>}
            </div>
            {/* <div className={styles.inputGroup}>


              </div> */}
          </div>
        </Collapse>



      </div>

      <div className={styles.buttons}>
        <button
          disabled={isDisabled}
          onClick={handleSubmit}
          className={styles.saveSettingsButton}
        >
          Save Settings
        </button>

        <button disabled={isDisabled}
          className={styles.startServerButton}>
          Start Server
        </button>

        <button disabled={isDisabled}
          className={styles.SyncDataButton}>
          Sync Data
        </button>
      </div>
      {showDialog && <Dialog message="Save settings successfully" onClose={closeDialog} />}
    </div>
  )
}


// Comment Codes
{/* <div className={styles.text}>Enter Endpoint for URL:</div>
<div className={styles.formgroup}>
  <span>endpoint</span>
  <input className={styles.formfield} type="text" placeholder="/data/" />
  <button>Enter</button>
</div> */}


{/* <p style={{padding: "0px"}}>
<label className={styles.toggleSwitch} onclick="">
<input type="checkbox" />
<span>
  <span style={{ fontSize: "10px" }}>OFF</span>
  <span style={{ fontSize: "10px" }}>ON</span>
</span>
<a></a>
</label>
</p> */}

{/* onClick={() => setIsDisabled(!isDisabled)} */ }


{/* <div className={styles.text}>Enter Port:</div>
<div className={styles.formgroup}>
  <span>Port</span>
  <input className={styles.formfield} type="text" placeholder="5000" />
  <button>Enter</button>
</div> */}