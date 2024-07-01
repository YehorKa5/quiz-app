export const routes = {
  quiz: (questionOrder = ":questionOrder") => `/quiz/${questionOrder}`,
  processing: "/processing",
  emailForm: "/email-form",
  thankYou: "/thank-you",
};
