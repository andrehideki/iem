const FormEntry = {
  
  init() {
    const formEntry = document.getElementById('form_entry')
    formEntry.addEventListener('submit', FormEntry.onSubmit)
  },

  onSubmit(event) {
    event.preventDefault();
    console.log('here')
  }
}

export { FormEntry }