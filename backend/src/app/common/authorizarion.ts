import { Request, Response, ErrorRequestHandler, NextFunction } from "express";
import { AuthorizationError } from "../error-handler/authorization.error";
import { verifyToken } from "./accesstoken";
import { RequestToken } from "../interface/common.interface";

export const middleware = async (req: any, res:Response, next: NextFunction) => {
   try {
     if(req.headers.authorization) {
        const decodedToken: any = await verifyToken(req.headers.authorization);
        req.user = decodedToken;
        next();
     } else {
        next(new AuthorizationError("Token is not there"));
     }
   } catch(err) {
      next(new AuthorizationError("Token is wrong"));
   }
     
}

