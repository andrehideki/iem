const getAccounts = async ({ accountRepository }) => {
  const accounts = await accountRepository.getAll();
  return accounts.map(account => {
    return {
      name: account.name,
      balance: account.balance
    }
  });
}

export default getAccounts;