import { getEntries, newEntry } from './src/domain/usecase';
import EntryRepositoryMemory from './src/infra/repository/EntryRepositoryMemory';

import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';

const app = express();
const port = 3333;
const entryRepository = new EntryRepositoryMemory();


app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'public/index.html'));
});

app.get('/entry', (req, res) => {
  res.send(getEntries({ entryRepository }));
});

app.post('/entry', (req, res) => {
  newEntry(req.body, entryRepository);
  res.send('');
});

app.get('/*', (req, res) => {
  const resource = req.url.split('/').at(-1);
  res.sendFile(path.resolve(__dirname, `public/${resource}`));
});

app.listen(port, () => {
  console.log(`App started at: ${port}`);
});