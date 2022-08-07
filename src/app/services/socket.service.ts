import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { Socket, io } from 'socket.io-client';

import { environment } from '@environments/environment';
import { Auth } from '@models/auth.model';
import { Session } from '@models/session.model';

@Injectable({
  providedIn: 'root',
})
export class SocketService {
  private _socket: Socket;
  private _socketConnected: Subject<Socket>;
  private _session: Session | null;

  get socket(): Socket {
    return this._socket;
  }

  get session(): Session | null {
    return this._session;
  }

  get socketConnected$(): Observable<Socket> {
    return this._socketConnected.asObservable();
  }

  set changeStateSocket(socket: Socket) {
    this._socketConnected.next(socket);
  }

  constructor() {
    this._session = null;
    this._socketConnected = new Subject();
    this._socket = io(environment.socketUrl, {
      autoConnect: false,
    });

    // this._socket.onAny((event, ...args) => {
    //   console.log(event, args);
    // });

    this._socket.on('connect', () => {
      this.changeStateSocket = this.socket;
    });

    this._getSession();
  }

  connect(): Socket {
    return this.socket.connect();
  }

  addAuthToSocket(auth: Session): void {
    this._socket.auth = auth;
  }

  private _getSession(): void {
    this._socket.on('SESSION', ({ session }: { session: Session }) => {
      this._session = session;

      this.addAuthToSocket(this._session);
      localStorage.setItem('session', JSON.stringify(this._session));
    });
  }
}
