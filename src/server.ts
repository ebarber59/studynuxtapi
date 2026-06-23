// src/server.ts
import app from "./app";
import { findByEmail } from "./repositories/users.repository";

console.log("TENANT ID:", process.env.ENTRA_TENANT_ID);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

async function testRepository() {
  const user = await findByEmail("ebarber@spearmintrhino.com");

  console.log(user);
}

testRepository().catch(console.error);
