import { registerEntry } from "../usecase/registerEntry.js";

const FormEntry = {
  
  init() {
    const formEntry = document.getElementById('form_entry')
    formEntry.addEventListener('submit', FormEntry.onSubmit)
  },

  onSubmit(event) {
    event.preventDefault();
    const data = {}
    for (let input of event.target) {
      const { name, value } = input
      if (!!name) data[name] = value || ''
    }
    registerEntry(data);
  }
}

export { FormEntry }