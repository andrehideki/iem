import { getMonthBalance } from "../usecase/getMonthBalance.js"

const EntriesBalance = {
  
  init({ currentMonth }) {
    const entriesBalance = document.getElementById('div_entries_balance')
    const { positive, negative } = getMonthBalance(currentMonth);
    entriesBalance.innerHTML = `
      <div>
        ${positive}
      </div>
      <div>
        ${negative}
      </div>
    `
  }
}

export { EntriesBalance }