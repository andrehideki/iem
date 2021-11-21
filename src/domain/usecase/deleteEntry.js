const deleteEntry = async (id, { entryRepository, accountRepository }) => {
  const entry = await entryRepository.get(id);
  const account = await accountRepository.get(entry.account);
  account.subtract(entry.value);
  await accountRepository.update(account);
  await entryRepository.delete(id);
}

export default deleteEntry;