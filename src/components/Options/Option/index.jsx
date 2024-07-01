import React from "react";
import styles from "../Options.module.scss";

export const Option = ({ text, onClick }) => {
  return (
    <div onClick={onClick} className={styles.optionWrapper}>
      {text}
    </div>
  );
};
