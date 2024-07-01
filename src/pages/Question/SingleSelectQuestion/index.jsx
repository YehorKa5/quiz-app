import React from "react";
import styles from "./SingleSelectQuestion.module.scss";
import { Option } from "../../../components/Options";

const SingleSelectQuestion = ({
  quizQeestionOptions,
  navigateToNextQuestion,
}) => {
  return (
    <div className={styles.questionsWrapper}>
      {quizQeestionOptions.map(({ text, onClickHandler }, index) => (
        <Option
          text={text}
          key={index}
          onClick={() => {
            onClickHandler?.();
            navigateToNextQuestion(text);
          }}
        />
      ))}
    </div>
  );
};

export default SingleSelectQuestion;
