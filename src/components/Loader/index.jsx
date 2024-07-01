import React, { useEffect, useState } from "react";
import styles from "./Loader.module.scss";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";

const ANIMATION_DURATION = 5000;
const TARGET_VALUE = 100;
const INITIAL_VALUE = 0;
const DELAY_BEFORE_NAVIGATE = 500;
const Loader = () => {
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    let timeoutId;
    let startValue = INITIAL_VALUE;
    const intervalMs = Math.floor(
      ANIMATION_DURATION / (TARGET_VALUE - INITIAL_VALUE)
    );

    const intervalId = setInterval(() => {
      startValue++;
      setCounter(startValue);
      if (startValue >= TARGET_VALUE) {
        clearInterval(intervalId);
        timeoutId = setTimeout(() => {
          navigate(routes.emailForm);
        }, DELAY_BEFORE_NAVIGATE);
      }
    }, intervalMs);

    return () => {
      clearInterval(intervalId);
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className={styles.loaderWrapper}>
      <svg
        width="250"
        height="250"
        viewBox="0 0 250 250"
        className={styles.circularProgress}
      >
        <circle className={styles.bg}></circle>
        <circle className={styles.fg}></circle>
      </svg>
      <div className={styles.loaderPercentage}>{counter}%</div>
    </div>
  );
};

export default Loader;
