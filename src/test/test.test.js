import connection from '../infra/database/connection'
test('test', async () => {
  const entry = connection.models.entry;
  const t = await entry.findAll();
  console.log(t)
})