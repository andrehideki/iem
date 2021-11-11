import Period from "../../model/Period";

const getBalance = ({ initialDate, endDate }, { entryRepository }) => {
  const period = new Period({ initialDate, endDate });
  const entries = entryRepository.find({ period });
  let values = entries.map(e => e.value);
  let total = values.reduce((a, b) => a + b, 0);
  let gain = values.filter(v => v >= 0).reduce((a, b) => a + b, 0);
  let loss = values.filter(v => v <= 0).reduce((a, b) => a + b, 0);
  return {
    total,
    gain,
    loss
  };
}

export default getBalance;