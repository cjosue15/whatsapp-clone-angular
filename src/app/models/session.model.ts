import { Auth } from './auth.model';

export class Session {
  sessionID: string | null;
  user: Auth | null;

  constructor(sessionID: string, user: Auth | null) {
    this.sessionID = sessionID;
    this.user = user;
  }
}
