import jwt, {TokenExpiredError, VerifyErrors} from 'jsonwebtoken';

import { TokeExpiryError, AuthorizationError } from '../error-handler/authorization.error';

export const generateToken = async (userDetails: any) => {
      const token = await jwt.sign(userDetails, 'decodeValue', {expiresIn: '2h'});
      return token;
}

// verify token
export const verifyToken = async (token: string) => {
     try {
       const decoded = await jwt.verify(token, "decodeValue");
       return decoded;
     } catch (error: any) {
       if (error.name === "TokenExpiredError") {
          throw new TokeExpiryError("Tokken is expired");
       } else {
         throw new AuthorizationError('Unauthorrized', error)
       }
     }
}