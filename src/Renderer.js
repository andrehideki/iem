const Renderer = {
  
  renderEntries(entries) {
    const tableEntries = document.getElementById('table_entries');
    tableEntries.innerHTML =
      entries = entries.map(entry => (`
        <tr>
          <td>${entry}</td>
        </tr>`
      ))
  }
}

export { Renderer }