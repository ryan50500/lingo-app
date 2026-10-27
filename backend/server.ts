// // # Express server and API routes

// This is the part where the OpenAI SDK belongs.

// First, open a terminal in the backend directory. If it has its own package.json, install the dependencies there:

// npm install openai express dotenv
// npm install -D @types/express @types/node

// If you already have Express or dotenv installed, you don't need to install them again. You'll also need a TypeScript runner or build setup for your backend, depending on what you've configured.

// The following is an illustrative Express example. It assumes your backend uses Express and that your TypeScript environment is configured to run it.

// import "dotenv/config";
// import express from "express";
// import OpenAI from "openai";

// const app = express();
// const client = new OpenAI();

// app.get("/test", async (_req, res) => {
//   try {
//     const response = await client.responses.create({
//       model: "gpt-6-astra",
//       input: "Say hello in one short sentence.",
//     });

//     res.json({ message: response.output_text });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ error: "OpenAI request failed" });
//   }
// });

// app.listen(3001, () => {
//   console.log("Server running at http://localhost:3001");
// });
