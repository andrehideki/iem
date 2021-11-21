import Account from '../model/Account';
import Entry from '../model/Entry';

const updateEntry = async ({ id, name, description, date, value, account }, { entryRepository, accountRepository }) => {
  let entry = await entryRepository.get(id);
  const originalAccountName = entry.account;
  const originalValue = entry.value;
  if (!entry) throw new Error('Entry not found: ' + id);
  entry = new Entry({ id, name, description, date, value, account });
  await entryRepository.update(entry);
  const originalAccount = await accountRepository.get(originalAccountName);
  if (originalAccountName === account && originalValue !== value) {
    originalAccount.add(value - originalValue);
    await accountRepository.update(originalAccount);
  } else {
    const newAccount = await accountRepository.get(entry.account);
    originalAccount.subtract(value);
    await accountRepository.update(originalAccount);
    if (!!newAccount) {
      newAccount.add(value);
      await accountRepository.update(newAccount);
    } else {
      await accountRepository.persist(new Account({ name: account, balance: value }));
    }
  }
}

export default updateEntry;