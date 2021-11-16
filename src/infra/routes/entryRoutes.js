import { getEntries, newEntry, getBalance, deleteEntry } from '../../domain/usecase';
import { Router } from 'express';
import EntryMapper from '../mapper/EntryMapper';
import EntryRepositoryDatabase from '../repository/EntryRepositoryDatabase';


const entryRepository = new EntryRepositoryDatabase(EntryMapper);

const router = Router();

router.get('/entry', async (req, res) => {
  const { initialDate, endDate } = req.query;
  const entries = await getEntries({ 
    initialDate: !!initialDate? new Date(initialDate) : undefined,
    endDate: !!endDate? new Date(endDate) : undefined
  }, { entryRepository });
  res.send(entries);
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

router.delete('/entry/:id', (req, res) => {
  const id = parseInt(req.params.id || 0);
  deleteEntry(id, { entryRepository });
  res.status(200).send('');
});

export { router };