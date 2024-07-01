import React from "react";
import styles from "./AnswersProcessing.module.scss";
import Loader from "../../components/Loader";
import Container from "../../components/Container";
import { useTranslation } from "react-i18next";

const AnswersProcessing = () => {
  const { t } = useTranslation();

  return (
    <Container>
      <div className={styles.wrapper}>
        <Loader />
        <span className={styles.processingText}>
          {t("processing.finding_collections")}
        </span>
      </div>
    </Container>
  );
};

export default AnswersProcessing;
