// quizApi.ts talks to your backend - contain a function that sends the settings to your server using fetch().

// Defines the settings needed to generate a quiz.
type QuizSettings = {
  topic: string;
  difficulty: string;
  questionCount: number;
};

// Sends the quiz settings to the backend and returns the generated questions.
export async function generateQuiz(settings: QuizSettings) {
  const response = await fetch("http://localhost:3001/api/quiz/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(settings),
  });

  if (!response.ok) {
    console.log("response not ok");
    throw new Error("Failed to generate quiz");
  }
  console.log("response IS ok :)");

  // Parses the JSON response from the backend and returns it to the frontend.
  return response.json();
}
