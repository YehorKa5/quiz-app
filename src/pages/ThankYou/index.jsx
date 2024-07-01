import React from "react";
import Container from "../../components/Container";
import ContentTitle from "../../components/ContentTitle";
import styles from "./ThankYou.module.scss";
import {
  clearSavedQuizAnswers,
  getSavedQuizAnswers,
} from "../../services/storage";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import Button from "../../components/Button";
import { convertToCSV, downloadCSV } from "./helpers";
import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../../translation/languages";

const ThankYou = () => {
  const navigate = useNavigate();
  const { i18n, t } = useTranslation();

  const handleRetakeQuiz = () => {
    clearSavedQuizAnswers();
    i18n.changeLanguage(LANGUAGES.ENGLISH);
    navigate(routes.quiz(1));
  };

  const handleDownloadCsv = () => {
    const answersMap = getSavedQuizAnswers();
    const answers = Object.values(answersMap);
    const csvContent = convertToCSV(answers);
    downloadCSV(csvContent);
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.content}>
          <ContentTitle
            title={t("thank_you_page.title")}
            subtitle={t("thank_you_page.subtitle")}
          />
          <img
            width={118}
            height={118}
            src="/images/checkmark.png"
            alt="Checkmark"
          />
        </div>
        <div className={styles.actions}>
          <div className={styles.download} onClick={handleDownloadCsv}>
            <img
              width={42}
              height={42}
              src="/images/download.png"
              alt="Download"
            />
            <span>{t("thank_you_page.download_button")}</span>
          </div>
          <Button onClick={handleRetakeQuiz}>{t("button.retake_quiz")}</Button>
        </div>
      </div>
    </Container>
  );
};

export default ThankYou;
