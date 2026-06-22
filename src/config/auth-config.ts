export const authConfig = {
  tenantId: process.env.ENTRA_TENANT_ID,
  audience: process.env.ENTRA_API_AUDIENCE,
  requiredScope: process.env.ENTRA_REQUIRED_SCOPE ?? "access_as_user",
};
