// src/middleware/request-logger.ts

import { NextFunction, Request, Response } from "express";

export function requestLogger(req: Request, res: Response, next: NextFunction) {
  const start = Date.now();

  res.on("finish", () => {
    const elapsed = Date.now() - start;

    console.log(
      `[${new Date().toISOString()}] ` +
        `${req.method} ${req.originalUrl} ` +
        `${res.statusCode} ` +
        `${elapsed}ms`,
    );
  });

  next();
}
