import { useState } from "react";
import { generateQuiz } from "../../services/quizApi";

// Collects the user's quiz settings and sends them to the backend.
export function SetupPage() {
  // Store the user's selected quiz settings.
  const [settings, setSettings] = useState({
    topic: "everyday conversation",
    difficulty: "intermediate",
    questionCount: 10,
  });

  // Runs when the user clicks the Generate Quiz button.
  const handleGenerateQuiz = async () => {
    try {
      // Send the settings to the backend and receive the questions.
      const questions = await generateQuiz(settings);

      // We'll use these questions in the quiz flow next.
      console.log("here are the questions:", questions);
    } catch (error) {
      console.error("Could not generate quiz:", error);
    }
  };

  return (
    <div>
      <h1>Set up your quiz</h1>

      {/* Let the user choose the quiz difficulty. */}
      <label htmlFor="difficulty">Difficulty:</label>
      <select
        id="difficulty"
        value={settings.difficulty}
        onChange={(event) =>
          setSettings({
            ...settings,
            difficulty: event.target.value,
          })
        }
      >
        <option value="beginner">Beginner</option>
        <option value="intermediate">Intermediate</option>
        <option value="advanced">Advanced</option>
      </select>

      <button onClick={handleGenerateQuiz}>Generate Quiz</button>
    </div>
  );
}
