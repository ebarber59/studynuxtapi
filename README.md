# StudyNuxt API

Express API secured with Microsoft Entra ID access tokens.

## Features
- Bearer token validation (tenant, issuer, audience)
- MSAL-compatible access token flow
- Ready for Prisma + MySQL integration

## Run
pnpm install
pnpm dev




## Naming Conventions

Tables: PascalCase Plural

Users
Locations
Roles
Permissions
RolePermissions
UserLocationRoles

Columns: PascalCase Singular

Id
UserId
LocationId
CreatedDate
UpdatedDate

TypeScript Models: Singular

User.ts
Location.ts
Role.ts
Permission.ts