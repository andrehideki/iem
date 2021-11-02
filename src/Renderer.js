const Renderer = {
  
  renderEntries(entries) {
    const tableEntries = document.getElementById('table_entries');
    const headers = ['Data', 'Nome', 'Descrição', 'Valor'];
    tableEntries.innerHTML = `
      <thead>
        <tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr>
      </thead>
      <tbody>
        ${entries.map(entry => (`
          <tr>
            <td>${entry.date}</td>
            <td>${entry.name}</td>
            <td>${entry.description}</td>
            <td>${entry.value}</td>
          </tr>`
          ))
          .join('')
        }
      </tbody>
    `  
  }
}

export { Renderer }