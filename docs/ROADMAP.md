# Lingo App — Roadmap

A hybrid of Context Reverso-style phrase search, Duolingo-style learning features,
and an AI phrase generator. This doc tracks the planned versions, architecture,
and tech decisions so they don't get lost as the app grows.

## Version roadmap (3–4 short milestones)

### v1 — Minimal viable product

- No login or auth yet.
- localStorage only: add and delete your own phrases/words (basic to-do-app style CRUD).
- Simple list/detail UI, no search yet.
- Testing: unit tests for CRUD logic/utils, basic CI setup (lint + test + build on push).

### v2 — Search + quizzes (still local-only)

- Search/filter your own words/phrases page (client-side, filters localStorage data).
- Quizzes generated from your existing local words/phrases.
- Basic progress/results tracking, still in localStorage.
- Testing: integration tests for search/filter and quiz flows.

### v3 — Accounts + AI

- Authentication and login, with sync to a backend (needed before AI, to gate usage per-user).
- AI generator: give it a word/phrase in the language you're learning, it generates random
  phrases or short stories using it.
- Migrate local data to the backend on login (with local fallback if offline).
- Testing: integration tests for auth flows and backend sync, mock AI API in tests.

### v4 — PWA: notifications + offline + polish

- Turn the app into a proper PWA (manifest + service worker) so it can be added to the
  iOS/Android home screen.
- Push notifications (e.g. "do your quiz" reminders) — note: on iOS this only works once the
  app is installed to the home screen (iOS 16.4+), and needs a push server (e.g. web-push or
  a service like OneSignal).
- Offline support via service worker caching (pairs naturally with the PWA work above).
- Analytics, localization, pagination/caching, general polish.
- Testing: offline/service-worker test scenarios, end-to-end smoke tests.

## Engineering practices

- Testing: Vitest + React Testing Library (unit + integration), expanded each version.
- CI: GitHub Actions running lint → test → build on every push/PR.

## Recommended project layout (feature-first, but pragmatic)

> Undecided — folder structure for features is still to be finalized.

## Tech suggestions

- Routing: React Router
- State: start with React Context or Zustand; move to Redux Toolkit if complexity grows
- Data fetching/caching: React Query or SWR for remote calls
- AI calls: proxy server (avoid exposing keys); small serverless endpoint
- Testing: Vitest + React Testing Library
- Linting/format: ESLint + Prettier (already present)
- Types: strict TypeScript (keep types in feature or shared `types/`)
