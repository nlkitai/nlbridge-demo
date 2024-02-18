import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {defaultMiddleware} from '@nlbridge/express';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the nlbridge demo API. The demo endpoint is at POST /api');
});

// This is all you need to add an nlbridge API endpoint to your Express app.
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
