import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import { router as entryRouter } from './src/infra/routes/entryRoutes';

const app = express();
const port = 3333;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.use(entryRouter);

app.get('/*', (req, res) => {
  const resource = req.url.split('/').at(-1);
  res.sendFile(path.resolve(__dirname, `public/${resource}`));
});

app.listen(port, () => {
  console.log(`App started at: ${port}`);
});