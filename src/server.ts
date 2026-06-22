// src/server.ts
import app from "./app";

console.log("TENANT ID:", process.env.ENTRA_TENANT_ID);
const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
