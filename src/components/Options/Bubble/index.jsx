import React from "react";
import styles from "../Options.module.scss";

export const Bubble = ({ text, imgSrc, selected, onClick }) => {
  return (
    <div
      className={`${styles.bubble} ${selected ? styles.selectedOption : ""}`}
      onClick={onClick}
    >
      <img src={imgSrc} />
      <span className={styles.bubbleText}>{text}</span>
    </div>
  );
};
