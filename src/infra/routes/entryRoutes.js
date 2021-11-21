import { getEntries, newEntry, getBalance, deleteEntry, updateEntry, getAccounts } from '../../domain/usecase';
import { Router } from 'express';
import EntryMapper from '../mapper/EntryMapper';
import AccountMapper from '../mapper/AccountMapper';
import EntryRepositoryDatabase from '../repository/EntryRepositoryDatabase';
import AccountRepositoryDatabase from '../repository/AccountRepositoryDatabase';
import entryController from '../controller/entryController';

const entryRepository = new EntryRepositoryDatabase(EntryMapper);
const accountRepository = new AccountRepositoryDatabase(AccountMapper);
const router = Router();
entryController.init({ entryRepository, accountRepository });

router.get('/entry', entryController.getEntries);
router.get('/entry/balance', entryController.getBalance);
router.get('/account', entryController.getAccounts);
router.post('/entry', entryController.newEntry);
router.put('/entry/:id', entryController.updateEntry);
router.delete('/entry/:id', entryController.deleteEntry);

export { router };