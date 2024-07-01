# Quiz React App

## Структура проекту

- **pages**: Містить сторінки додатку (`AnswersProcessing`, `EmailForm`, `Question`, `ThankYou`).
- **components**: Містить компоненти додатку (`TextField`, `Container`, `ContentTitle`, `Button`, `Header`, `Loader`, `Options`).
- **services**: Містить сервісні функції для роботи з локальними сховищами, щоб зберігати обрану мову і відповіді (`storage.js`).
- **translation**: Містить налаштування для переключання мови додатку (`English`, `Spanish`, `French`, `German`).
- **hooks**: Містить кастомні хуки (`useDetectLanguage.js`, `useQuizQuestions.js`).

## Використання

1. Запустіть проект:
   ```bash
   yarn start
   ```
2. Дайте відповіді на всі запитання.
3. Зачекайте на обробку ваших відповідей.
4. Введіть імейл для отримання повного доступу.
5. Завантажте csv файл з інформацією про відповіді та/або натисніть на кнопку для перепроходження гри.
