import React, { useState } from "react";
import Container from "../../components/Container";
import styles from "./EmailForm.module.scss";
import ContentTitle from "../../components/ContentTitle";
import Button from "../../components/Button";
import TextField from "../../components/TextField";
import { useNavigate } from "react-router-dom";
import { routes } from "../../routes";
import { saveAnswerToStorage } from "../../services/storage";
import { useQuizQuestions } from "../../hooks/useQuizQuestions";
import { useTranslation } from "react-i18next";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const EmailForm = () => {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const navigate = useNavigate();
  const quizQuestions = useQuizQuestions();
  const { t } = useTranslation();

  const handleEmailSend = () => {
    if (EMAIL_REGEX.test(email)) {
      setEmailError("");
      saveAnswerToStorage({
        questionOrder: quizQuestions.length + 1,
        questionAnswer: email,
        questionTitle: "Email",
        questionType: "email",
      });
      navigate(routes.thankYou);
    } else {
      setEmailError(t("email_form.text_field.error"));
    }
  };

  return (
    <Container>
      <div className={styles.wrapper}>
        <div className={styles.emailFormContent}>
          <ContentTitle
            title={t("email_form.title")}
            subtitle={t("email_form.subtitle")}
          />
          <TextField
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder={t("email_form.text_field.placeholder")}
            error={emailError}
          />
          <span className={styles.policyText}>{t("email_form.policy")}</span>
        </div>
        <Button disabled={!email.trim()} onClick={handleEmailSend}>
          {t("button.next")}
        </Button>
      </div>
    </Container>
  );
};

export default EmailForm;
