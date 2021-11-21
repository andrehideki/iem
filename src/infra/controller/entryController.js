import { deleteEntry, getAccounts, getBalance, getEntries, newEntry, updateEntry } from "../../domain/usecase";

const entryController = {
  
  repositories: {},

  init({ entryRepository, accountRepository }) {
    entryController.repositories.entryRepository = entryRepository;
    entryController.repositories.accountRepository = accountRepository;
  },

  async getEntries(req, res) {
    const { initialDate, endDate, account } = req.query;
    const entries = await getEntries({ 
      initialDate: !!initialDate? new Date(initialDate) : undefined,
      endDate: !!endDate? new Date(endDate) : undefined,
      account: account || ''
    }, entryController.repositories);
    res.send(entries);
  },

  async getBalance(req, res) {
    const { initialDate, endDate, account } = req.query;
    const balance = await getBalance({
        initialDate: new Date(initialDate), 
        endDate: new Date(endDate),
        account: account || ''
    }, entryController.repositories);
    res.send(balance);
  },

  async getAccounts(req, res) {
    const accounts = await getAccounts(entryController.repositories);
    res.send(accounts);
  },

  async newEntry(req, res) {
    const { name, description, date, value, account } = req.body;
    await newEntry({ name, description, date: new Date(date), value: parseFloat(value || 0), account }, entryController.repositories);
    res.status(201).send('');
  },

  async updateEntry(req, res) {
    const id = parseInt(req.params.id || 0);
    const { name, description, date, value, account } = req.body;
    await updateEntry({ id, name, description, date: new Date(date), value: parseFloat(value || 0), account }, entryController.repositories);
    res.status(200).send('');
  },

  async deleteEntry(req, res) {
    const id = parseInt(req.params.id || 0);
    await deleteEntry(id, entryController.repositories);
    res.status(200).send('');
  }
}

export default entryController;