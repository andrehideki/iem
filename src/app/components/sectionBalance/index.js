import eventEmitter from "../../eventEmitter";
import { getRequest } from "../../utils/ajax";
import { getPeriodFromYearMonth } from "../../utils/date";
import { formatToBRL } from "../../utils/money";
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
        <div class="d-flex flex-row">
          <div class="badge bg-light ${ getColorClass(balance.total) } fs-6">
            <label class="fw-bold">Total:</label>
            <span>${ formatToBRL(balance.total || 0) }</span>
          </div>
          <div class="ms-2 badge bg-light text-dark fs-6">
            <label class="fw-bold">Despesas:</label>
            <span>${ formatToBRL(balance.loss || 0) }</span>
          </div>
          <div class="ms-2 badge bg-light text-dark fs-6">
            <label class="fw-bold">Ganhos:</label>
            <span>${ formatToBRL(balance.gain || 0) }</span>
          </div>
        </div>
      `
    });
  }
}

function getColorClass(value) {
  return (value || 0) > 0? 'text-success' : 'text-danger';
}

export default sectionBalance;