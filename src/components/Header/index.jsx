import React from "react";
import styles from "./Header.module.scss";
import ProgressBar from "./ProgressBar";
import { useNavigate } from "react-router-dom";

const Header = ({
  withoutArrowBack = false,
  currentQuestionOrder,
  totalQuestionsAmount,
}) => {
  const navigate = useNavigate();

  return (
    <header className={styles.header}>
      {!withoutArrowBack && (
        <div className={styles.arrowBack} onClick={() => navigate(-1)}>
          <img src="/images/arrow-back.png" alt="Arrow back" />
        </div>
      )}
      <div className={styles.headerContainer}>
        <div className={styles.progressStep}>
          <span className={styles.activeStep}>{currentQuestionOrder}</span>/
          {totalQuestionsAmount}
        </div>
        <ProgressBar
          progressPersantage={
            (currentQuestionOrder / totalQuestionsAmount) * 100
          }
        />
      </div>
    </header>
  );
};

export default Header;
