"use strict";

import DatabaseClient from "../../../infra/database/DatabaseClient"


const client = new DatabaseClient(); ;

test('should connect', async () => {
  await client.connect();
});