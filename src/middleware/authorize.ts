import { NextFunction, Request, Response } from "express";

export function authorize(permission: string) {
  return (req: Request, res: Response, next: NextFunction) => {
    if (!req.currentUser) {
      return res.status(401).json({
        message: "Unauthenticated",
      });
    }

    const hasPermission = req.currentUser.permissions.includes(permission);

    if (!hasPermission) {
      return res.status(403).json({
        message: "Forbidden",
      });
    }

    next();
  };
}
