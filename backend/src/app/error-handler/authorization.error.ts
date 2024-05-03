export class AuthorizationError extends Error {
  error: Error | undefined;
  constructor(message: string, error?: Error) {
    super();
    this.message = message;
    this.error = error;
  }
}
export class TokeExpiryError extends Error {
  constructor(message: string) {
    super();
    this.message = message;
  }
}


