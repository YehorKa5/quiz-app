import React from "react";
import styles from "../Options.module.scss";

export const Card = ({ emoji, text, onClick }) => {
  return (
    <div className={styles.card} onClick={onClick}>
      <div className={styles.cardEmoji}>{emoji}</div>
      <span className={styles.cardText}>{text}</span>
    </div>
  );
};
