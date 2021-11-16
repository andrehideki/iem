import DatabaseClient from "../../../infra/database/DatabaseClient"
import EntryMapper from "../../../infra/mapper/EntryMapper";


test('should connect', async () => {
  let client = DatabaseClient.connect();
  const result = await client.sync();
  console.log(result)
});