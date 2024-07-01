import React from "react";
import styles from "../Options.module.scss";

const Checkbox = ({ checked }) => {
  return (
    <div className={styles.checkboxContainer}>
      <input
        type="checkbox"
        id="customCheckbox"
        className={styles.customCheckbox}
        checked={checked}
        readOnly
      />
      <label htmlFor="customCheckbox" className={styles.customLabel} />
    </div>
  );
};

export default Checkbox;
