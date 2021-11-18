const getAccounts = async ({ entryRepository }) => {
  const accounts = await entryRepository.getAllAccounts();
  return accounts.map(account => {
    return {
      name: account,
      balance: 0
    }
  });
}

export default getAccounts;