import { getEntries, newEntry } from '../../domain/usecase';
import EntryRepositoryMemory from '../../infra/repository/EntryRepositoryMemory';
import { Router } from 'express';

const entryRepository = new EntryRepositoryMemory();

const router = Router();

router.get('/entry', (req, res) => {
  res.send(getEntries({ entryRepository }));
});

router.post('/entry', (req, res) => {
  newEntry(req.body, entryRepository);
  res.send('');
});

export { router };