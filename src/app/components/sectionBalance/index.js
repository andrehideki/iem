import eventEmitter from "../../eventEmitter";
import { getRequest } from "../../utils/ajax";
import { getPeriodFromYearMonth } from "../../utils/date";
import context from "../context";

const sectionBalance = {
  
  init(target) {
    const { initialDate, endDate } = getPeriodFromYearMonth(context.filter.month);
    const { account } = context.filter;
    this.getBalance(target, { initialDate, endDate, account });
    const triggerEvents = ['newEntry', 'deleteEntry', 'updateEntry', 'filterChange'];
    eventEmitter.on(triggerEvents, () => {
      const { initialDate, endDate } = getPeriodFromYearMonth(context.filter.month);
      const { account } = context.filter;
      this.getBalance(target, { initialDate, endDate, account })
    });
  },

  getBalance(target, { initialDate, endDate, account }) {
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