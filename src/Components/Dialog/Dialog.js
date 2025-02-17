import React from 'react';
import styles from './Dialog.module.css'; // Import the CSS file
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const Dialog = ({ message, onClose, isSuccess = true }) => {
  
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <div className={`modal fade ${styles.modalConfirm}`}>
          <div className={`${styles.modalDialog} modal-dialog`}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                {isSuccess ? (
                  <FaCheckCircle style={{ color: 'green', marginRight: '10px', fontSize: "25px" }} />
                ) : (
                  <FaTimesCircle style={{ color: 'red', marginRight: '10px', fontSize: "25px" }} />
                )}
                  {isSuccess ? <div style={{ color: 'green', fontSize: "25px" }}>Awesome!</div> : <div style={{ color: 'red', fontSize: "25px" }}>Oops! Something went wrong</div>}
                </div>

              <div className={styles.modalBody}>
                <p className="text-center" style={{fontSize: "15px" }}>
                  {message}
                </p>
              </div>
              <div className={styles.modalFooter}>
                <button className={styles.button} onClick={onClose} >
                  OK
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dialog;
