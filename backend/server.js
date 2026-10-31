import "dotenv/config";
import express from "express";
import OpenAI from "openai";

const app = express();
const client = new OpenAI();

// Allows Express to read JSON sent from the frontend.
app.use(express.json());

// Receives quiz settings and generates quiz questions using OpenAI.
app.post("/api/quiz/generate", async (req, res) => {
  try {
    // 1. Get the quiz settings sent from SetupPage.tsx.
    const { topic, difficulty, questionCount, questionType } = req.body;

    // 2. Check that the required settings have been provided.
    if (!topic || !difficulty || !questionCount) {
      // If any required setting is missing, send a 400 error response
      // and immediately exit this route function.
      return res.status(400).json({
        error: "Please provide a topic, difficulty and question count.",
      });
    }

    // Convert questionCount into a number.
    const count = Number(questionCount);

    // Check that the question count is a whole number between 1 and 20.
    if (!Number.isInteger(count) || count < 1 || count > 20) {
      // If the question count is invalid, send a 400 error response
      // and immediately exit this route function.
      return res.status(400).json({
        error: "Question count must be a whole number between 1 and 20.",
      });
    }

    // 3. Ask OpenAI to generate a quiz using the user's settings.
    const response = await client.responses.create({
      model: "gpt-6-luna",
      input: `
        Generate ${count} ${questionType || "multiple choice"} quiz questions.

        Topic: ${topic}
        Difficulty: ${difficulty}

        Return the result as a JSON object with a "questions" property.
        The "questions" property should contain an array of questions.

        Each question should have:
        - question: the question text
        - options: an array of four possible answers
        - correctAnswer: the correct answer
        - explanation: a short explanation of why it is correct
      `,
      text: {
        format: {
          type: "json_object",
        },
      },
    });

    // 4. Convert OpenAI's JSON text into a JavaScript object.
    const quiz = JSON.parse(response.output_text);

    // 5. Take the generated quiz.
    // Convert it into JSON.
    // Send it back as the HTTP response to the frontend.
    res.json(quiz);
  } catch (error) {
    console.error("Quiz generation error:", error);

    res.status(500).json({
      error: "Could not generate quiz questions.",
    });
  }
});

// Start the backend server.
app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
