export function getTodayDate() {
  return new Date();
}

export function getLastDateOfCurrentMonth() {
  const totay = new Date();
  return new Date(totay.getFullYear(), totay.getMonth() + 1, 0);
}

export function getPeriodFromYearMonth(yearMonth) {
  if (!yearMonth) throw new Error('invalid year-month: ' + yearMonth);
  const date = new Date(`${yearMonth}-1`);
  return {
    initialDate: date,
    endDate: new Date(date.getFullYear(), date.getMonth() + 1, 0)
  }
}