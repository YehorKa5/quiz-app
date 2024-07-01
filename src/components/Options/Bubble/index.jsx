import React from "react";
import styles from "../Options.module.scss";

export const Bubble = ({ text, imgSrc, selected, onClick }) => {
  return (
    <div
      className={`${styles.bubble} ${selected ? styles.selectedOption : ""}`}
      onClick={onClick}
    >
      <img src={imgSrc} width={25} height={25} />
      <span className={styles.bubbleText}>{text}</span>
    </div>
  );
};
