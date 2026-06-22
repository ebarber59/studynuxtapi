import { Request } from "express";
import { CurrentUser } from "./currentUser";

export interface AuthenticatedRequest extends Request {
  user: CurrentUser;
}
