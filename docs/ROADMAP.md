# Lingo App — Roadmap

A focused language-learning quiz app. Users drag the correct word into a blank
in a sentence, receive immediate feedback, and improve through questions that
adapt to their weaknesses.

## V1 — Basic playable app
**Goal:** Get a complete end-to-end quiz working.

- **React + TypeScript** — 🖥️ **Frontend concern:** Builds the quiz interface and gives you type safety.
- **Vite** — 🖥️ **Frontend concern:** Handles development/build tooling for the React application.
- **Node + Express** — ⚙️ **Backend concern:** Provides your server/API that the frontend communicates with.
- **AI question generation** — ⚙️ **Backend concern:** The server calls the AI provider so your API key isn't exposed to the browser.
- **A1–C1 difficulty selection** — 🖥️ **Frontend concern:** Lets the user choose their desired difficulty; the selection is then sent to the backend.
- **Drag answer into blank** — 🖥️ **Frontend concern:** This is purely interactive quiz UI behaviour.
- **Correct/incorrect feedback** — 🖥️ **Frontend + backend:** Backend determines the correct answer, while frontend displays the result.
- **Basic scoring** — 🖥️ **Frontend concern initially:** The UI can calculate/display the score; later you can persist it through the backend.
- **Basic loading/error states** — 🖥️ **Frontend concern:** Shows the user what is happening while API requests are running or failing.
- **Basic unit/integration tests** — 🧪 **Both:** Frontend tests UI behaviour while backend tests server-side logic.

## V2 — Reliable AI-powered app
**Goal:** Make AI-generated questions dependable rather than simply hoping the AI gives you good data.

- **Zod validation** — ⚙️ **Backend concern:** Validates that AI responses actually match the structure your application expects.
- **Validate grammar topic/difficulty/case** — ⚙️ **Backend concern:** The server should reject nonsensical or invalid question data before giving it to the frontend.
- **Reject malformed questions** — ⚙️ **Backend concern:** Prevents bad AI output from entering your application.
- **Duplicate-question detection** — ⚙️ **Backend concern:** The server/database can check whether you've already generated the same question.
- **Retry failed AI generation** — ⚙️ **Backend concern:** Your server can automatically ask the AI again when generation fails.
- **Prefetch next question** — 🖥️ **Frontend + backend:** Backend generates the question, while frontend requests it early so the next question is ready.
- **Loading states** — 🖥️ **Frontend concern:** Tells the user that the next question is being generated.
- **Error handling** — 🖥️ **Frontend + backend:** Backend handles technical failures; frontend turns them into useful messages/actions.
- **Prevent double submissions** — 🖥️ **Frontend + backend:** Frontend can disable the button, while backend should still protect against duplicate requests.
- **Better API error responses** — ⚙️ **Backend concern:** Gives the frontend predictable HTTP status codes and error information.
- **More comprehensive tests** — 🧪 **Both:** You test AI/question-generation logic on the backend and the resulting user behaviour on the frontend.

## V3 — Users + database + personalised learning
**Goal:** Turn the quiz into a persistent, personalised application.

### Authentication & database

- **PostgreSQL** — 🗄️ **Backend/database concern:** Stores users, questions, attempts, grammar topics and progress.
- **Supabase-hosted PostgreSQL** — ☁️ **Infrastructure concern:** Supabase hosts/manages your PostgreSQL database so you don't have to run a database server yourself.
- **User registration** — 🖥️ **Frontend + backend:** Frontend provides the registration form; backend/auth system creates and manages the account.
- **User login** — 🖥️ **Frontend + backend:** Frontend collects credentials while the authentication system verifies the user.
- **Authentication** — ⚙️ **Backend concern:** Establishes *who* the current user is when they make API requests.
- **Authorisation** — ⚙️ **Backend concern:** Ensures User A cannot access User B's attempts or progress.
- **Database migrations** — 🗄️ **Backend/database concern:** Gives you a controlled history of changes to your database structure.
- **Users table** — 🗄️ **Database concern:** Stores persistent user/account information.
- **Questions table** — 🗄️ **Database concern:** Stores generated questions and their metadata.
- **Grammar topics** — 🗄️ **Database concern:** Allows questions and attempts to be associated with things like Genitive, Dative, etc.
- **Attempts table** — 🗄️ **Database concern:** Records what the user answered and whether they were correct.
- **Indexes** — 🗄️ **Database concern:** Makes frequently used queries faster as your data grows.

### Personalised learning

- **Track correct/incorrect answers** — ⚙️ **Backend + database:** Backend records the attempt and PostgreSQL persists it.
- **Track mistakes** — ⚙️ **Backend + database:** Your application needs to associate mistakes with the user and relevant grammar topic.
- **Calculate accuracy by grammar topic** — ⚙️ **Backend concern:** The server can aggregate historical attempts to calculate performance.
- **Identify weak areas** — ⚙️ **Backend/domain logic:** This is application-specific learning logic rather than UI logic.
- **Adaptive question selection** — ⚙️ **Backend/domain logic:** The server decides which grammar areas/questions should be prioritised.
- **"Your weak areas" screen** — 🖥️ **Frontend concern:** Displays the personalised information returned by the API.
- **Progress/history screen** — 🖥️ **Frontend concern:** Presents the user's historical performance visually.
- **Difficulty adjustment** — ⚙️ **Backend/domain logic:** Your learning algorithm can decide whether the next questions should become easier or harder.
- **Tests** — 🧪 **Both:** Backend tests the learning algorithms/API; frontend tests the progress and quiz interfaces.

## V4 — Production & long-term maintenance
**Goal:** Treat the application like something you're responsible for running and maintaining.

### Security & reliability

- **Rate limiting** — ⚙️ **Backend concern:** Prevents someone from hammering your API and potentially generating huge numbers of AI requests.
- **Input validation** — ⚙️ **Backend concern:** Never assume data coming from the browser is trustworthy.
- **Secure API keys/environment variables** — ⚙️ **Backend/infrastructure concern:** Keeps secrets out of the frontend and source control.
- **Authentication hardening** — ⚙️ **Backend concern:** Ensures authentication remains secure as the application grows.
- **API timeouts** — ⚙️ **Backend concern:** Prevents your server from waiting indefinitely for an external service.
- **Retry strategies** — ⚙️ **Backend concern:** Allows temporary AI/network failures to recover automatically.
- **Graceful error handling** — 🖥️ **Frontend + backend:** Backend handles failures safely while frontend gives the user a sensible experience.

### Observability

- **Structured logging** — ⚙️ **Backend concern:** Records useful information about requests, failures and application behaviour.
- **Error tracking** — ⚙️ **Backend + frontend:** Captures unexpected errors so you can investigate them.
- **AI generation monitoring** — ⚙️ **Backend concern:** Lets you see how often generation fails or produces invalid questions.
- **Database/API monitoring** — ⚙️ **Backend/infrastructure concern:** Helps identify slow or failing server operations.

### Performance

- **Database query optimisation** — 🗄️ **Backend/database concern:** Ensures you aren't unnecessarily retrieving huge amounts of data.
- **Database indexes** — 🗄️ **Database concern:** Speeds up frequently used queries.
- **Reduce unnecessary API requests** — 🖥️ **Frontend + backend:** Frontend should request only what it needs and backend should provide sensible endpoints.
- **Question prefetching** — 🖥️ **Frontend + backend:** Backend generates the question while frontend is still displaying the current one.
- **Frontend performance** — 🖥️ **Frontend concern:** Keeps the interface responsive and avoids unnecessary rendering/work.
- **Backend performance** — ⚙️ **Backend concern:** Keeps API responses and server-side processing efficient.

### Testing & deployment

- **Unit tests** — 🧪 **Both:** Test individual pieces of logic in isolation.
- **Integration tests** — 🧪 **Both:** Test several parts working together.
- **API tests** — 🧪 **Backend concern:** Verify that your endpoints behave correctly.
- **Playwright E2E tests** — 🧪 **Full-stack concern:** Simulates a real user interacting with the application from browser to backend.
- **CI/CD** — 🚀 **Infrastructure/engineering concern:** Automatically runs tests/builds and potentially deploys changes.
- **Production deployment** — 🚀 **Full-stack/infrastructure concern:** Gets the frontend, backend and database into a real environment.
- **Environment configuration** — 🚀 **Backend/infrastructure concern:** Keeps development/test/production settings separate.

### PWA & product features

- **PWA / Add to Home Screen** — 🖥️ **Frontend concern:** Makes the web app behave more like an installable mobile application.
- **Offline/cache strategy** — 🖥️ **Frontend concern:** Allows selected parts of the app to continue working without a network connection.
- **Push notifications** — 🖥️ **Frontend + backend:** Browser handles receiving/displaying notifications while backend triggers them.
- **Daily streak** — ⚙️ **Backend + database + frontend:** Backend calculates the streak, database stores activity, and frontend displays it.
- **Daily/weekly goals** — ⚙️ **Backend + frontend:** Backend tracks progress while frontend lets users configure and view goals.
- **Spaced repetition** — ⚙️ **Backend/domain logic:** The server calculates when previously learned material should appear again.
- **Grammar-specific practice** — 🖥️ **Frontend + backend:** Frontend lets users choose a grammar area and backend selects/generates appropriate questions.
- **Story mode** — ⚙️ **Backend + frontend:** Backend generates the story while frontend presents it interactively.
- **Progress charts** — 🖥️ **Frontend concern:** The backend supplies the historical data and the frontend visualises it.
