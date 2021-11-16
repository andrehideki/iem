const deleteEntry = async (id, { entryRepository }) => {
  await entryRepository.delete(id);
}

export default deleteEntry;