import express from 'express';

const app = express();
const port = 3333;

app.listen(port, () => {
  console.log(`App started at: ${port}`);
});