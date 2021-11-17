import eventEmitter from "../../eventEmitter";
import { getYearMonth } from "../../utils/date";
import context from "../context";

const formFilter = {
  
  init(target) {
    fetch('account')
      .then(data => data.json())
      .then(accounts => {
        target.innerHTML = `
          <div class="row">
            <div class="col-3">
              <label>Periodicidade</label>
              <input id="month" type="month" name="month" value="${ context.filter.month }" class="form-control form-control-sm mb-2" />
            </div>
            <div class="col-2">
              <label>Conta</label>
              <select name="account" value="${ context.filter.account }" class="form-control form-control-sm">
                <option value="">Todos</option>
                ${accounts.map(account => (
                  `<option value="${account}">${account}</option>`
                 )).join('')}
              </select>
            </div>
          </div>
        `;
        const inputMonth = target.querySelector('[name="month"]');
        inputMonth.addEventListener('change', this.onChange);
        const inputAccount = target.querySelector('[name="account"]');
        inputAccount.addEventListener('change', this.onChange);
        eventEmitter.on([ 'newEntry', 'deleteEntry' ], () => inputMonth.value = getYearMonth());
      })
  },

  onChange(event) {
    const { name, value } = event.target;
    context.filter[name] = value;
    eventEmitter.emit('filterChange', context.filter);
  }
}

export default formFilter;