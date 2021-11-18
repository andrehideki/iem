import Account from '../../model/Account';
import Entry from '../../model/Entry';

const newEntry = async ({ name, description, date, value, account }, { entryRepository, accountRepository }) => {
  validate({ name, description, date, value, account });
  const entry = new Entry({ name, description, date, value, account });
  await entryRepository.persist(entry);
  const registeredAccount = await accountRepository.get(entry.account);
  if (!!registeredAccount) {
    console.log('exists')
  } else {
    await accountRepository.persist(new Account({ name: account, balance: value }));
  }
}

function validate({ name, description, date, value, account }) {
  if (!name) throw new Error('name is required');
  if (!date) throw new Error('date is required');
  if (!(date instanceof Date)) throw new Error('date is invalid');
  if (!value) throw new Error('value is required');
  if (!account) throw new Error('account is required');
}

export default newEntry;