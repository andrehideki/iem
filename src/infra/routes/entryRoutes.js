import { getEntries, newEntry, getBalance, deleteEntry, updateEntry } from '../../domain/usecase';
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

router.get('/entry/balance', async (req, res) => {
  const { initialDate, endDate } = req.query;
  const balance = await getBalance({ 
    initialDate: new Date(initialDate), 
    endDate: new Date(endDate)
    }, { entryRepository });
  res.send(balance);
});

router.post('/entry', async (req, res) => {
  const { name, description, date, value } = req.body;
  await newEntry({ name, description, date: new Date(date), value: parseFloat(value || 0) }, entryRepository);
  res.status(201).send('');
});

router.put('/entry/:id', async (req, res) => {
  const id = parseInt(req.params.id || 0);
  console.log('id', id, req.params.id)
  const { name, description, date, value } = req.body;
  await updateEntry({ id, name, description, date: new Date(date), value: parseFloat(value || 0) }, entryRepository);
  res.status(200).send('');
});

router.delete('/entry/:id', async (req, res) => {
  const id = parseInt(req.params.id || 0);
  await deleteEntry(id, { entryRepository });
  res.status(200).send('');
});

export { router };