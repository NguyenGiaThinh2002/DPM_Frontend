import React from 'react';
import styles from './Dialog.module.css'; // Import the CSS file

const Dialog = ({ message, onClose }) => {
  return (
    <div className={styles.overlay}>
      <div className={styles.dialog}>
        <div className={`modal fade ${styles.modalConfirm}`}>
          <div className={`${styles.modalDialog} modal-dialog`}>
            <div className={styles.modalContent}>
              <div className={styles.modalHeader}>
                {/* <div className={styles.iconBox}>
                  <i className="material-icons">&#xE876;</i>
                </div> */}
                <h4 className="modal-title w-100">Awesome!</h4>
              </div>
              <div className={styles.modalBody}>
                <p className="text-center">
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
