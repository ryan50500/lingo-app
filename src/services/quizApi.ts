// quizApi.ts talks to your backend - contain a function that sends the settings to your server using fetch().

// export async function generateQuiz(settings: {
//   topic: string;
//   difficulty: string;
//   questionCount: number;
//   questionType: string;
// }) {
//   const response = await fetch("/api/quiz/generate", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(settings),
//   });

//   if (!response.ok) {
//     throw new Error("Failed to generate quiz");
//   }

//   return response.json();
// }
