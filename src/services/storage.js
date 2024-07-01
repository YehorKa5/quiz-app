import { LANGUAGES } from "../translation/languages";

const QUIZ_STORAGE_KEY = "quiz_answers";
const QUIZ_LANGUAGE_KEY = "quiz_language";

export const setQuizLanguageToStorage = (language) => {
  localStorage.setItem(QUIZ_LANGUAGE_KEY, language);
};

export const getQuizLanguage = () => {
  try {
    return localStorage.getItem(QUIZ_LANGUAGE_KEY) ?? LANGUAGES.ENGLISH;
  } catch (error) {
    return LANGUAGES.ENGLISH;
  }
};

export const getSavedQuizAnswers = () => {
  try {
    return JSON.parse(localStorage.getItem(QUIZ_STORAGE_KEY)) || {};
  } catch (error) {
    return {};
  }
};

export const saveAnswerToStorage = ({
  questionOrder,
  questionAnswer,
  questionTitle,
  questionType,
}) => {
  try {
    const savedQuizAnswers = getSavedQuizAnswers();
    localStorage.setItem(
      QUIZ_STORAGE_KEY,
      JSON.stringify({
        ...savedQuizAnswers,
        [questionOrder]: {
          questionOrder,
          questionAnswer,
          questionTitle,
          questionType,
        },
      })
    );
  } catch (error) {
    console.log(error);
  }
};

export const clearSavedQuizAnswers = () => {
  localStorage.setItem(QUIZ_STORAGE_KEY, JSON.stringify({}));
};
