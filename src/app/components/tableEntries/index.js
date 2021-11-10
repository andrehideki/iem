const tableEntries = {
  init(target) {
    target.innerHTML = `
      <thead>
        <tr>
          <th>Nome</th>
          <th>Descrição</th>
          <th>Data</th>
          <th>Valor</th>
        </tr>
      </thead>
      <tbody></tbody>
    `;
  }
}

export default tableEntries;