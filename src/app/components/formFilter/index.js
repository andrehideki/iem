import eventEmitter from "../../eventEmitter";

const formFilter = {
  
  init(target) {
    target.innerHTML = `
      <label>
        <span>Periodicidade</span>
        <input id="month" type="month" name="month"/>
      </label>
    `;
    target.querySelector('[name="month"]').addEventListener('change', this.onChange);
  },

  onChange(event) {
    const month = event.target.value;
    eventEmitter.emit('periodChange', month);
  }
}

export default formFilter;