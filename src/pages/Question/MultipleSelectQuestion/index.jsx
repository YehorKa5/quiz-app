import React, { useState } from "react";
import styles from "./MultipleSelectQuestion.module.scss";
import { OptionWithCheckbox } from "../../../components/Options";
import Button from "../../../components/Button";
import { useTranslation } from "react-i18next";

const MultipleSelectQuestion = ({
  quizQeestionOptions,
  navigateToNextQuestion,
}) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const { t } = useTranslation();

  const toggleSelectedAnswers = (answer) => {
    setSelectedAnswers((prevState) => {
      if (prevState.includes(answer)) {
        return prevState.filter((el) => el !== answer);
      }

      return [...prevState, answer];
    });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.questionsWrapper}>
        {quizQeestionOptions.map(({ text }, index) => (
          <OptionWithCheckbox
            text={text}
            key={index}
            onClick={() => {
              toggleSelectedAnswers(text);
            }}
            selected={selectedAnswers.includes(text)}
          />
        ))}
      </div>
      <Button
        disabled={!selectedAnswers.length}
        onClick={() => {
          navigateToNextQuestion(selectedAnswers.join(", "));
        }}
      >
        {t("button.next")}
      </Button>
    </div>
  );
};

export default MultipleSelectQuestion;
