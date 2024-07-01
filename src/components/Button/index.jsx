import React from "react";
import styles from "./Button.module.scss";

const Button = ({ children, disabled, ...buttonProps }) => {
  return (
    <button
      className={`${styles.button} ${disabled ? styles.disabled : ""}`}
      disabled={disabled}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
