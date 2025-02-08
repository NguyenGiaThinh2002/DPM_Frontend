import React, { useState } from 'react'
import styles from './SettingPage.module.css';
import Collapse from '../../Components/Collapse/Collapse';

export default function SettingPage() {
  const [isDisabled, setIsDisabled] = useState(true);
  return (
    <div className={styles.content}>
      <div className={styles.setting}>SETTINGS</div>
      <div className={styles.settingBody}>

        <Collapse className={styles.serverSetting} title='Server Settings'>
          <div className={styles.server}>
            {/* <div className={styles.setting}>Server Settings</div> */}
            <div className={styles.text}>Enter Server URL:</div>
            <div className={styles.formgroup}>
              <span>https://</span>
              <input className={styles.formfield} type="text" placeholder="server.com" />
              <button>Enter</button>
            </div>

            <div className={styles.text}>Enter Port:</div>
            <div className={styles.formgroup}>
              <span>Port</span>
              <input className={styles.formfield} type="text" placeholder="5000" />
              <button>Enter</button>
            </div>

          </div>
        </Collapse >

        <Collapse className={styles.databaseSettings} title='Database Settings'>
          <div className={styles.database}>
            <div className={styles.text}>Enter Database URL:</div>

            <div className={styles.formgroup}>
              <span>https://</span>
              <input className={styles.formfield} type="text" placeholder="database.com" />
              <button>Enter</button>
            </div>

            <div className={styles.text}>Enter Database Name:</div>
            <div className={styles.formgroup}>
              <span>Database</span>
              <input className={styles.formfield} type="text" placeholder="SyncDatabase" />
              <button>Enter</button>
            </div>


            <div className={styles.text}>Enter Collection Name:</div>
            <div className={styles.formgroup}>
              <span>Collection</span>
              <input className={styles.formfield} type="text" placeholder="User" />
              <button>Enter</button>
            </div>

          </div>
        </Collapse>

        <Collapse className={styles.scheduleSettings} title='Schedule Settings'>
          {/* <div className={styles.setting}>Schedule Settings</div> */}
          <div className={styles.schedule}>
            <div style={{ display: "flex" }}>
              <div className={styles.text}>Enter Synchronized Periodic Time:</div>
            </div>

            <div className={styles.formgroup}>
              <span>Sync Time</span>
              <input className={styles.formfield} type="text" placeholder="10 AM / 10 PM" />
              <div className={styles.text}></div>
              <button>Enter</button>
            </div>

            <div className={styles.text}>Enter Synchronized Cycle Time:</div>
            <div className={styles.formgroup}>
              <span>Sync Time</span>
              <input className={styles.formfield} type="text" placeholder="10 seconds" />
              <div></div>
              <button>Enter</button>
            </div>
          </div>
        </Collapse>



      </div>

      <div className={styles.buttons}>
        <button
          disabled={isDisabled}
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