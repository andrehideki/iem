import { getEntries, newEntry, getBalance } from '../../domain/usecase';
import EntryRepositoryMemory from '../../infra/repository/EntryRepositoryMemory';
import { Router } from 'express';

const entryRepository = new EntryRepositoryMemory();

const router = Router();

router.get('/entry', (req, res) => {
  res.send(getEntries({ entryRepository }));
});

router.get('/entry/balance', (req, res) => {
  const { initialDate, endDate } = req.query;
  res.send(getBalance({ 
    initialDate: new Date(initialDate), 
    endDate: new Date(endDate)
  }, { entryRepository }));
});

router.post('/entry', (req, res) => {
  const { 
    name,
    description,
    date,
    value
  } = req.body;
  newEntry({ name, description, date: new Date(date), value: parseFloat(value || 0) }, entryRepository);
  res.send('');
});

export { router };