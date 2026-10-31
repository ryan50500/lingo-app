import "dotenv/config";
import express from "express";
import OpenAI from "openai";

const app = express();
const client = new OpenAI();

app.get("/test", async (_req, res) => {
  try {
    const response = await client.responses.create({
      model: "gpt-6-astra",
      input: "Say hello in one short sentence.",
    });

    res.json({ message: response.output_text });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "OpenAI request failed" });
  }
});

app.listen(3001, () => {
  console.log("Server running at http://localhost:3001");
});
