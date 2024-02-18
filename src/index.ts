import express from 'express';
import cors from 'cors';
import {defaultMiddleware} from '@nlbridge/express';

const port = process.env.PORT || 3000;
const origin = (process.env.ORIGIN || 'nlux.dev').split(',');

const app = express();
app.use(cors({origin}));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('The nlbridge demo endpoint is at POST /api');
});

//
// 🎯 This is all what you need to add nlbridge API endpoint to your Express app
// with default config: OpenAI adapters, and in-memory context management.
//
app.post(
    '/api',
    defaultMiddleware('openai', {
        apiKey: process.env.OPENAI_API_KEY,
        chatModel: process.env.OPENAI_CHAT_MODEL,
    }),
);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
