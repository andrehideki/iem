import Period from '../../model/Period';

const getEntries = ({ initialDate, endDate }, { entryRepository }) => {
  const period = (!!initialDate && !!endDate)? new Period({ initialDate, endDate }) : undefined;
  return entryRepository.find({ period: period });
}

export default getEntries;