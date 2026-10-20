import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { SetupPage } from '../features/setup/SetupPage'
import { QuizPage } from '../features/quiz/QuizPage'
import { ResultsPage } from '../features/results/ResultsPage'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SetupPage />} />
        <Route path="/quiz" element={<QuizPage />} />
        <Route path="/results" element={<ResultsPage />} />
      </Routes>
    </BrowserRouter>
  )
}