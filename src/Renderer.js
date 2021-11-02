const Renderer = {
  
  renderEntries(entries) {
    const tableEntries = document.getElementById('table_entries');
    const tableHeaders = ['Data', 'Nome', 'Descrição', 'Valor']
      .map(header => `<th>${header}</th>`).join('')
    const tableRows = entries.map(entry => (`
      <tr>
        <td>${entry}</td>
      </tr>`
      ))
      .join('')
    tableEntries.innerHTML = `
      <thead>
        <tr>${tableHeaders}</tr>
      </thead>
      <tbody>${tableRows}</tbody>
    `  
  }
}

export { Renderer }