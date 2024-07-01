import React from "react";
import styles from "./TextField.module.scss";

const TextField = ({ value, onChange, error, placeholder }) => {
  return (
    <div className={styles.wrapper}>
      <input
        className={`${styles.textField} ${error ? styles.errorField : ""}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
      {error && <span className={styles.error}>{error}</span>}
    </div>
  );
};

export default TextField;
