import { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import  { AuthorizationError } from "./authorization.error";

function errorHandler(
  err: Error,
  req: Request,
  res: Response,
  next: NextFunction
) {

  if (err instanceof AuthorizationError) {
    res.status(403).json({ error: err.message });
  } else {
    res.status(500).json({ error: "Internal Server Error" , err:err});
  }
  
}

export default errorHandler;
