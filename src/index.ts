import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';

const port = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to the nlbridge Demo APIs!');
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
