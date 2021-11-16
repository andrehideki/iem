import path from 'path';
import { getEntries, newEntry, getBalance, deleteEntry } from '../../domain/usecase';
import EntryRepositoryMemory from '../../infra/repository/EntryRepositoryMemory';
import { Router } from 'express';
import EntryRepositoryLowdb from '../repository/EntryRepositoryLowdb';
import { DatabaseClient } from '../lowdb/DatabaseClient';

const databaseClient = new DatabaseClient(path.resolve(__dirname, 'db.json'));
const entryRepository = new EntryRepositoryLowdb(databaseClient);

const router = Router();

router.get('/entry', (req, res) => {
  const { initialDate, endDate } = req.query;
  res.send(getEntries({ 
    initialDate: !!initialDate? new Date(initialDate) : undefined,
    endDate: !!endDate? new Date(endDate) : undefined
  }, { entryRepository }));
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