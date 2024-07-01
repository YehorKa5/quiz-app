import React, { useState } from "react";
import styles from "./BubbleQuestion.module.scss";
import { Bubble } from "../../../components/Options";
import Button from "../../../components/Button";
import { useTranslation } from "react-i18next";

const BubbleQuestion = ({ quizQeestionOptions, navigateToNextQuestion }) => {
  const [selectedAnswers, setSelectedAnswers] = useState([]);
  const { t } = useTranslation();

  const toggleSelectedAnswers = (answer) => {
    setSelectedAnswers((prevState) => {
      if (prevState.includes(answer)) {
        return prevState.filter((el) => el !== answer);
      }

      return prevState.length < 3 ? [...prevState, answer] : prevState;
    });
  };

  return (
    <div className={styles.mainWrapper}>
      <div className={styles.questionsWrapper}>
        {quizQeestionOptions.map(({ text, imgSrc }, index) => (
          <Bubble
            text={text}
            key={index}
            onClick={() => {
              toggleSelectedAnswers(text);
            }}
            selected={selectedAnswers.includes(text)}
            imgSrc={imgSrc}
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

export default BubbleQuestion;
