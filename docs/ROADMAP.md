# Lingo App — Roadmap

A focused language-learning quiz app. Users drag the correct word into a blank
in a sentence, receive immediate feedback, and improve through questions that
adapt to their weaknesses.

## Phase 1 — Basic app

- Build the client with React and strict TypeScript.
- Generate quiz questions with an AI service.
- Support difficulty levels from A1 through C1.
- Let users drag an answer into a sentence blank using `@dnd-kit/core`.
- Show basic scoring and a simple quiz result.
- Render question text as plain text rather than executable HTML.
- Add unit and integration tests for question data, scoring, and the quiz flow.

## Phase 2 — Validation of questions

- Prefetch the next question while the current question is being answered.
- Add loading, empty, error, retry, and refetch states.
- Validate AI responses with Zod before displaying or storing them.
- Reject bad questions, including malformed data, missing answers, invalid blanks,
  duplicate answers, and duplicate questions within a quiz session.
- Retry or refetch a question when the AI returns unusable content.
- Add unit and integration tests for validation, duplicate detection, retries,
  prefetching, and failure states.

## Phase 3 — Track areas of weakness

- Store quiz attempts, selected answers, scores, timestamps, and response times.
- Track grammar topics associated with each question.
- Track recurring mistakes by word, grammar topic, and difficulty level.
- Generate adaptive questions based on the user's weak areas.
- Add a "Your weak areas" screen with useful grammar feedback.
- Introduce a backend database when cross-session persistence and user accounts
  are needed. A possible first choice is PostgreSQL with a small API layer.
- Define data ownership, migrations, validation, and privacy rules before storing
  user learning history remotely.
- Add unit and integration tests for attempt storage, analytics, adaptive question
  selection, database access, and the weak-areas screen.

## Phase 4 — Production engineering

- Add rate limiting around AI requests and other expensive endpoints.
- Add notifications and review reminders.
- Make the app installable as a PWA with a manifest and service worker.
- Add observability and structured logging for request failures, latency, rejected
  questions, and quiz completion without logging sensitive user data.
- Measure and improve performance: bundle size, render work during dragging,
  question latency, caching, and perceived loading time.
- Refactor as the codebase grows: extract stable domain logic, simplify state
  boundaries, remove duplication, and document important architectural decisions.
- Add end-to-end tests, production error monitoring, and deployment checks.

## Engineering practices

- Testing: Vitest and React Testing Library for unit and integration tests;
  add end-to-end coverage as production workflows appear.
- CI: GitHub Actions running lint, tests, and build checks on every push and pull request.
- Types: strict TypeScript, with shared types for questions, attempts, answers,
  grammar topics, and API responses.
- Dependencies: review package size, maintenance status, security advisories,
  and upgrade impact before adding or updating libraries.

## Accessibility

- Use semantic HTML and labeled controls for all quiz interactions.
- Support keyboard and touch alternatives to dragging.
- Announce loading, errors, and correct/incorrect feedback to assistive technology.
- Maintain visible focus states, logical tab order, sufficient color contrast, and
  minimum touch targets of approximately 44 by 44 points.
- Test the quiz with keyboard navigation and VoiceOver or TalkBack before release.

## Recommended project layout

Use a feature-first structure as the application grows:

- `features/quiz` — question display, drag-and-drop answers, scoring, and quiz state.
- `features/questions` — AI client, Zod schemas, validation, retries, and prefetching.
- `features/progress` — attempts, weakness analysis, adaptive selection, and charts.
- `shared` — API clients, storage, types, accessibility helpers, and test utilities.

## Tech suggestions

- Routing: React Router for quiz, results, weak areas, and settings views.
- Drag and drop: `@dnd-kit/core` for pointer and touch support.
- Validation: Zod for AI responses and API boundaries.
- Server state: React Query or SWR for question generation, prefetching, and caching.
- Backend: a small API with PostgreSQL when Phase 3 persistence is required.
- AI calls: proxy through the backend so API keys stay server-side.
- Testing: Vitest, React Testing Library, and an end-to-end browser test tool.
- Linting and formatting: ESLint and Prettier.
