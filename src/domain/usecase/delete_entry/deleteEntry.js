const deleteEntry = (id, { entryRepository }) => {
  entryRepository.delete(id);
}

export default deleteEntry;