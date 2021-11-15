import eventEmitter from "../../eventEmitter";
import { getYearMonth } from "../../utils/date";

const formFilter = {
  
  init(target) {
    target.innerHTML = `
      <label>
        <span>Periodicidade</span>
        <input id="month" type="month" name="month" value="${ getYearMonth() }"/>
      </label>
    `;
    const inputMonth = target.querySelector('[name="month"]');
    inputMonth.addEventListener('change', this.onChange);
    eventEmitter.on([ 'newEntry', 'deleteEntry' ], () => inputMonth.value = getYearMonth());
  },

  onChange(event) {
    const month = event.target.value;
    eventEmitter.emit('periodChange', month);
  }
}

export default formFilter;