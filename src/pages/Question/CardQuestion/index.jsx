import React from "react";
import styles from "./CardQuestion.module.scss";
import { Card } from "../../../components/Options";

const CardQuestion = ({ quizQeestionOptions, navigateToNextQuestion }) => {
  return (
    <div className={styles.questionsWrapper}>
      {quizQeestionOptions.map(({ text, emoji }, index) => (
        <Card
          emoji={emoji}
          text={text}
          key={index}
          onClick={() => {
            navigateToNextQuestion(text);
          }}
        />
      ))}
    </div>
  );
};

export default CardQuestion;
