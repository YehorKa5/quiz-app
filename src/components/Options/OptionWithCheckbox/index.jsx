import React from "react";
import styles from "../Options.module.scss";
import Checkbox from "./Checkbox";

export const OptionWithCheckbox = ({ text, onClick, selected }) => {
  return (
    <div
      onClick={onClick}
      className={`${styles.optionWrapper} ${
        selected ? styles.selectedOption : ""
      }`}
    >
      {text}
      <Checkbox checked={selected} />
    </div>
  );
};
