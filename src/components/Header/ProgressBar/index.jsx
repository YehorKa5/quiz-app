import React from "react";
import styles from "./ProgressBar.module.scss";

const ProgressBar = ({ progressPersantage }) => {
  return (
    <div className={styles.progressBarContainer}>
      <div
        className={styles.progressBar}
        style={{ width: `${progressPersantage}%` }}
      />
    </div>
  );
};

export default ProgressBar;
