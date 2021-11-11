import Period from "../../model/Period";

const getBalance = ({ initialDate, endDate }, { entryRepository }) => {
  const period = new Period({ initialDate, endDate });
  const entries = entryRepository.find({ period });
  let total = entries.map(e => e.value).reduce((a, b) => a + b, 0);
  return {
    total
  };
}

export default getBalance;