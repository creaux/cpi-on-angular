export class Auth {
  error?: string;
  token?: string;

  constructor({ error, token }) {
    this.token = token;
    this.error = error;
  }
}
