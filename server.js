import express from 'express';
import path from 'path';

const app = express();
const port = 3333;

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.get('/*', (req, res) => {
  const resource = req.url.split('/').at(-1);
  res.sendFile(path.resolve(__dirname, `public/${resource}`));
})

app.listen(port, () => {
  console.log(`App started at: ${port}`);
});