import eventEmitter from "../../eventEmitter";
import { getFirstDateOfCurrentMonth, getLastDateOfCurrentMonth } from "../../utils/date";

const sectionBalance = {
  
  init(target) {
    this.getBalance(target, { initialDate: getFirstDateOfCurrentMonth(), endDate: getLastDateOfCurrentMonth() });
    eventEmitter.on(['newEntry', 'deleteEntry', 'updateEntry'], () => this.getBalance(target, { initialDate: getFirstDateOfCurrentMonth(), endDate: getLastDateOfCurrentMonth() }));
  },

  getBalance(target, { initialDate, endDate }) {
    fetch(`/entry/balance?initialDate=${initialDate.toISOString().substring(0, 10)}&endDate=${endDate.toISOString().substring(0, 10)}`)
    .then(data => data.json())
    .then(balance => {
      target.innerHTML = `
        <div>
          <label>Total</label>
          <span>${balance.total || 0}</span>
        </div>
        <div>
          <label>Despesas</label>
          <span>${balance.loss || 0}</span>
        </div>
        <div>
          <label>Ganhos</label>
          <span>${balance.gain || 0}</span>
        </div>
      `
    });
  }
}

export default sectionBalance;