import Period from '../../model/Period';

const getEntries = async ({ initialDate, endDate }, { entryRepository }) => {
  const period = (!!initialDate && !!endDate)? new Period({ initialDate, endDate }) : undefined;
  const entryMappers = await entryRepository.find({ period: period });
  const entries = entryMappers.map(entry => {
    return {
      id: entry.id,
      name: entry.name,
      description: entry.description,
      date: entry.date.toISOString().substring(0, 10),
      value: entry.value
    }
  });
  return entries;
}

export default getEntries;