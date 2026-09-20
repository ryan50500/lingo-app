# Lingo App — Roadmap

A focused language-learning quiz app. Users drag the correct word into a blank in
a sentence, receive immediate feedback, and build progress over time. This doc
tracks the planned versions, architecture, and tech decisions as the app grows.

## Version roadmap (3–4 short milestones)

### v1 — Quiz foundation

- No login or auth yet.
- A local quiz bank stored in localStorage: add, edit, and delete words and
  sentence templates.
- A quiz screen with one blank per sentence, draggable answer choices, and
  correct/incorrect feedback.
- A results screen showing score, completed questions, and missed answers.
- Testing: unit tests for quiz validation, scoring, shuffle logic, and storage;
  basic CI setup (lint + test + build on push).
- CI: GitHub Actions workflow (`.github/workflows/ci.yml`) running lint → test → build on
  every push/PR, set up as soon as the repo is pushed to GitHub.
- Accessibility: semantic HTML, labeled form inputs/buttons, min touch target sizes.

### v2 — Quiz modes + progress (still local-only)

- Multiple quiz sessions: practice mode, timed mode, and review-missed-answers mode.
- Progress history, streaks, accuracy by word, and a simple difficulty indicator,
  still stored in localStorage.
- A quiz-bank management view with client-side search/filter for words and sentences.
- Testing: integration tests for quiz setup, drag-and-drop flows, results, and progress.
- Accessibility: ARIA labels for quiz controls, focus states, keyboard-accessible
  answer selection, and clear announcements for correct/incorrect feedback.
- Quiz interaction: drag-and-drop "drag the correct answer into the sentence blank" question
  type, using `@dnd-kit/core` (touch/pointer-event based — native HTML5 DnD doesn't work on
  mobile). Correct/incorrect shown via green check / red X after drop.

### v3 — Accounts + generated quizzes

- Authentication and login, with backend sync for quiz banks, attempts, and progress.
- Generated quiz questions: a user supplies a target word, and the server returns a
  sentence with one blank, the correct word, and plausible distractors as structured JSON.
- Validate question shape, answer counts, language, and blank placement before showing
  generated questions. Treat generated text as untrusted plain text when rendering it.
- Migrate local quiz data to the backend on login, with a local fallback if offline.
- Testing: integration tests for auth, sync conflicts, generated-question validation,
  and mocked generation responses.
- Accessibility: accessible auth forms (labels/errors announced), color contrast check.

### v4 — PWA: offline quizzes + polish

- Turn the app into a proper PWA (manifest + service worker) so it can be added to the
  iOS/Android home screen.
- Offline quiz sessions and queued progress synchronization via service worker caching.
- Push notifications for review reminders — on iOS this requires the app to be installed
  to the home screen (iOS 16.4+) and needs a push server or notification service.
- Analytics for quiz completion, accuracy, and retention; localization; caching; and
  general polish.
- Testing: offline/service-worker test scenarios, end-to-end smoke tests.
- Accessibility: manifest name/icons meaningful for screen readers, full a11y audit pass.

## Engineering practices

- Testing: Vitest + React Testing Library (unit + integration), expanded each version.
- CI: GitHub Actions running lint → test → build on every push/PR.

## Accessibility

Still needed even as a mobile PWA — arguably more so, since it's a web app relying on
VoiceOver (iOS) / TalkBack (Android), not native platform accessibility.

- Semantic HTML + ARIA labels for interactive elements (lists, buttons, forms).
- Minimum touch target sizes (~44×44pt) and no hover-only interactions.
- Sufficient color contrast (important for outdoor/mobile viewing).
- Visible focus states and logical tab order (for keyboard/switch device users too).
- Manifest `name`/`short_name`/icons should be meaningful for home screen + app switcher.
- Bake this in per version rather than bolting it on later — much harder to retrofit.

## Recommended project layout (feature-first, but pragmatic)

> Undecided — folder structure for features is still to be finalized.

## Tech suggestions

- Routing: React Router for quiz, quiz-bank, results, progress, and settings views
- State: start with React Context or Zustand; move to Redux Toolkit if complexity grows
- Data fetching/caching: React Query or SWR for remote quiz and progress data
- Question generation: proxy server (avoid exposing keys); small serverless endpoint
- Testing: Vitest + React Testing Library
- Linting/format: ESLint + Prettier (already present)
- Types: strict TypeScript (keep types in feature or shared `types/`)
