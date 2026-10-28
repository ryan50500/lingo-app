# Lingo App — Roadmap

A focused language-learning quiz app. Users drag the correct word into a blank
in a sentence, receive immediate feedback, and improve through questions that
adapt to their weaknesses.

## V1 — Basic playable app

**Goal:** Build a complete, playable end-to-end quiz.

### Implementation 🚀

🔑 Set up the API key — ✅ ✅ ✅ Create an OpenAI API key and save it in a .env file in the backend folder as OPENAI_API_KEY=your_key. Never put the key in the frontend.

📦 Install dependencies ✅ ✅ ✅ — Install openai, express and dotenv in the backend project.

🧪 Test the OpenAI connection — In backend/server.ts, create a simple /test endpoint that sends a basic prompt to OpenAI and returns its response. Run the server and visit http://localhost:3001/test to confirm it works.

🧠 Create the quiz generation endpoint — In backend/server.ts, add /api/quiz/generate to accept quiz settings and ask OpenAI to generate questions based on them.

🔗 Connect the frontend to the backend — In src/services/quizApi.ts, create a fetch() function that sends quiz settings to /api/quiz/generate and returns the generated questions.

⚙️ Connect the setup page — In src/setup/SetupPage.tsx, send the user's selected topic, difficulty, question count and question type to the API service.

### Core application

- **Frontend** — React, TypeScript and Vite; quiz setup, A1–C1 difficulty selection, drag-and-drop answers, feedback, scoring and loading/error states.
- **Backend** — Node.js and Express API, including AI-powered question generation with API keys kept server-side.
- **Testing** — Basic unit and integration tests covering key frontend behaviour and backend logic.

### Engineering foundations

- **Code formatting** — Prettier with shared configuration, a pinned development dependency and npm scripts.
- **Continuous Integration (CI)** — GitHub Actions runs formatting checks, tests and production builds on pushes and pull requests.
- **Pull request workflow** — Practise feature branches, code reviews and merging changes after required checks pass.
- **Continuous Deployment (CD)** — Defer automated deployment until the application is ready for deployment in V4.

## V2 — Reliable AI-powered app

**Goal:** Ensure AI-generated questions are valid, reliable and handled gracefully when things go wrong.

### AI reliability

- **Question validation** — Use Zod to validate question structure, grammar topic, difficulty and answer correctness; reject malformed or invalid questions.
- **Duplicate detection** — Detect previously generated questions to reduce repetition.
- **Retry handling** — Retry failed AI generation attempts and handle persistent failures safely.

### User experience & API reliability

- **Question prefetching** — Prepare the next question in advance to reduce waiting.
- **Error handling & API responses** — Return consistent, predictable errors from the backend and display useful feedback in the frontend.
- **Submission protection** — Prevent accidental double submissions on both frontend and backend.

### Testing

- **Expanded tests** — Cover AI response validation, generation failures, API behaviour and key frontend interactions.

## V3 — Users, database & personalised learning

**Goal:** Introduce user accounts, persist learning activity and adapt quizzes to each user's performance.

### Authentication & database

- **Database** — Use Supabase-hosted PostgreSQL to store users, questions, grammar topics, attempts and learning progress.
- **Authentication & authorisation** — Implement registration, login and secure access controls so users can only access their own data.
- **Database schema & migrations** — Create the necessary tables, relationships and migrations; add indexes where they improve query performance.

### Personalised learning

- **Learning history** — Record answers, correctness and mistakes against users and relevant grammar topics.
- **Performance analysis** — Calculate accuracy, identify weak areas and track progress over time.
- **Adaptive question selection** — Prioritise grammar topics and adjust difficulty based on the user's performance.
- **Progress UI** — Add progress/history and "Your weak areas" screens.
- **Testing** — Test authentication, data access permissions, learning logic, API behaviour and progress interfaces.

## V4 — Production & long-term maintenance

**Goal:** Treat the application like something you're responsible for running and maintaining.

### Security & reliability

- **Security hardening** — Protect APIs with rate limiting, input validation, secure secrets management and robust authentication.
- **Resilient error handling** — Add timeouts, retry strategies and graceful failure handling across the frontend and backend.

### Monitoring & performance

- **Application monitoring** — Add structured logging, error tracking and monitoring for AI generation, APIs and database operations.
- **Performance optimisation** — Improve database queries and indexes, reduce unnecessary API requests and optimise frontend/backend performance.
- **Question prefetching** — Generate upcoming questions in advance to reduce waiting.

### Testing & deployment

- **Comprehensive testing** — Expand unit, integration and API tests; add Playwright end-to-end tests.
- **CI/CD & production deployment** — Automate checks and builds, configure separate environments and deploy the application to production.

### PWA & product features

- **Progress & motivation** — Add daily streaks, learning goals and progress charts.
- **Advanced learning** — Introduce spaced repetition, grammar-specific practice and story mode.
- **PWA capabilities** — Support installation, selected offline functionality and push notifications.
