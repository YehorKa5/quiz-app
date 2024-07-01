import { useTranslation } from "react-i18next";
import { LANGUAGES } from "../translation/languages";
import { setQuizLanguageToStorage } from "../services/storage";

export const useQuizQuestions = () => {
  const { i18n, t } = useTranslation();

  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language);
    setQuizLanguageToStorage(language);
  };

  return [
    {
      title: t("choose_language.title"),
      subtitle: t("choose_language.subtitle"),
      questionType: "single",
      options: [
        {
          text: "English",
          onClickHandler: () => {
            handleLanguageChange(LANGUAGES.ENGLISH);
          },
        },
        {
          text: "French",
          onClickHandler: () => {
            handleLanguageChange(LANGUAGES.FRENCH);
          },
        },
        {
          text: "German",
          onClickHandler: () => {
            handleLanguageChange(LANGUAGES.GERMAN);
          },
        },
        {
          text: "Spanish",
          onClickHandler: () => {
            handleLanguageChange(LANGUAGES.SPANISH);
          },
        },
      ],
    },
    {
      title: t("choose_age.title"),
      questionType: "single",
      options: [
        { text: t("choose_age.option1") },
        { text: t("choose_age.option2") },
        { text: t("choose_age.option3") },
        { text: t("choose_age.option4") },
      ],
    },
    {
      title: t("choose_gender.title"),
      subtitle: t("choose_gender.subtitle"),
      questionType: "card",
      options: [
        { text: t("choose_gender.option1"), emoji: "👩" },
        { text: t("choose_gender.option2"), emoji: "👨" },
        { text: t("choose_gender.option3"), emoji: "😉" },
      ],
    },
    {
      title: t("choose_hate_in_book.title"),
      questionType: "multiple",
      options: [
        { text: t("choose_hate_in_book.option1") },
        { text: t("choose_hate_in_book.option2") },
        { text: t("choose_hate_in_book.option3") },
        { text: t("choose_hate_in_book.option4") },
      ],
    },
    {
      title: t("choose_favorite_topics.title"),
      subtitle: t("choose_favorite_topics.subtitle"),
      questionType: "bubble",
      options: [
        {
          text: t("choose_favorite_topics.option1"),
          imgSrc: "/images/wolf.png",
        },
        {
          text: t("choose_favorite_topics.option2"),
          imgSrc: "/images/action.png",
        },
        {
          text: t("choose_favorite_topics.option3"),
          imgSrc: "/images/royal.png",
        },
        {
          text: t("choose_favorite_topics.option4"),
          imgSrc: "/images/romance.png",
        },
        {
          text: t("choose_favorite_topics.option5"),
          imgSrc: "/images/young-adult.png",
        },
        {
          text: t("choose_favorite_topics.option6"),
          imgSrc: "/images/bad-boy.png",
        },
      ],
    },
  ];
};
