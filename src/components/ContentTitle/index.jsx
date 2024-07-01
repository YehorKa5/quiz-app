import React from "react";
import styles from "./ContentTitle.module.scss";

const ContentTitle = ({ title, subtitle }) => {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{title}</h1>
      {subtitle && <h3 className={styles.subtitle}>{subtitle}</h3>}
    </div>
  );
};

export default ContentTitle;
