import React from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import Container from "../../components/Container";
import Header from "../../components/Header";
import ContentTitle from "../../components/ContentTitle";
import { useQuizQuestions } from "../../hooks/useQuizQuestions";
import { routes } from "../../routes";
import { saveAnswerToStorage } from "../../services/storage";
import styles from "./Question.module.scss";
import SingleSelectQuestion from "./SingleSelectQuestion";
import CardQuestion from "./CardQuestion";
import MultipleSelectQuestion from "./MultipleSelectQuestion";
import BubbleQuestion from "./BubbleQuestion";

const questionComponent = {
  single: SingleSelectQuestion,
  card: CardQuestion,
  multiple: MultipleSelectQuestion,
  bubble: BubbleQuestion,
};

const Question = () => {
  const { questionOrder = 1 } = useParams();
  const quizQuestions = useQuizQuestions();
  const navigate = useNavigate();
  const currentQuizQuestionOrder = Number(questionOrder);

  if (
    Number.isNaN(currentQuizQuestionOrder) ||
    currentQuizQuestionOrder > quizQuestions.length
  ) {
    return <Navigate to={routes.quiz(1)} />;
  }

  const currentQuestion = quizQuestions[currentQuizQuestionOrder - 1] ?? {};
  const QuestionComponent =
    questionComponent[currentQuestion?.questionType] ?? null;

  const navigateToNextQuestion = (questionAnswer) => {
    saveAnswerToStorage({
      questionOrder: currentQuizQuestionOrder,
      questionAnswer,
      questionTitle: currentQuestion.title,
      questionType: currentQuestion.questionType,
    });
    if (currentQuizQuestionOrder !== quizQuestions.length) {
      navigate(routes.quiz(currentQuizQuestionOrder + 1));
    } else {
      navigate(routes.processing);
    }
  };

  return (
    <Container>
      <div className={styles.questionWrapper}>
        <Header
          currentQuestionOrder={currentQuizQuestionOrder}
          totalQuestionsAmount={quizQuestions.length}
          withoutArrowBack={currentQuizQuestionOrder === 1}
        />
        <div className={styles.questionContent}>
          <ContentTitle
            title={currentQuestion.title}
            subtitle={currentQuestion.subtitle}
          />
          <QuestionComponent
            quizQeestionOptions={currentQuestion.options}
            navigateToNextQuestion={navigateToNextQuestion}
          />
        </div>
      </div>
    </Container>
  );
};

export default Question;
