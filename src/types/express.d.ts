import { CurrentUser } from "./currentUser";

declare global {
  namespace Express {
    interface Request {
      user?: CurrentUser;
    }
  }
}
