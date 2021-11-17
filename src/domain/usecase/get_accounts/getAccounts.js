const getAccounts = async ({ entryRepository }) => {
  return await entryRepository.getAllAccounts();
}

export default getAccounts;