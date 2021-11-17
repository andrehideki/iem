import eventEmitter from "../../eventEmitter";
import { getRequest } from "../../utils/ajax";
import { getFirstDateOfCurrentMonth, getLastDateOfCurrentMonth, getPeriodFromYearMonth } from "../../utils/date";
import context from "../context";

const sectionBalance = {
  
  init(target) {
    const { initialDate, endDate } = getPeriodFromYearMonth(context.filter.month);
    const { account } = context.filter;
    this.getBalance(target, { initialDate, endDate, account });
    eventEmitter.on(['newEntry', 'deleteEntry', 'updateEntry', 'filterChange'], () => {
      const { initialDate, endDate } = getPeriodFromYearMonth(context.filter.month);
      const { account } = context.filter;
      this.getBalance(target, { initialDate, endDate, account })
    });
  },

  getBalance(target, { initialDate, endDate, account }) {
    // fetch(`/entry/balance?initialDate=${initialDate.toISOString().substring(0, 10)}&endDate=${endDate.toISOString().substring(0, 10)}&account=${account}`)
    getRequest('/entry/balance', { initialDate, endDate, account })
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