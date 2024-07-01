import AnswersProcessing from "./pages/AnswersProcessing";
import EmailForm from "./pages/EmailForm";
import Question from "./pages/Question";
import { Navigate, Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import ThankYou from "./pages/ThankYou";
import { useDetectLanguage } from "./hooks/useDetectLanguage";

function App() {
  useDetectLanguage();

  return (
    <Routes>
      <Route path={routes.quiz()} element={<Question />} />
      <Route path={routes.processing} element={<AnswersProcessing />} />
      <Route path={routes.emailForm} element={<EmailForm />} />
      <Route path={routes.thankYou} element={<ThankYou />} />
      <Route path="*" element={<Navigate to={routes.quiz(1)} />} />
    </Routes>
  );
}

export default App;
