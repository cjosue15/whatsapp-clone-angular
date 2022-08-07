import { Injectable } from '@angular/core';
import { take, Observable, BehaviorSubject } from 'rxjs';

import { UserEvents } from '@core/socket/events/user.events';
import { IAuth, IAuthForm } from '@models/auth.model';
import { SocketService } from './socket.service';
import { Auth } from '../models/auth.model';
import { Session } from '@models/session.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  currentUser: Auth;
  private _users: BehaviorSubject<Auth[]>;
  private _selectedUser: Auth | null;

  public get users$(): Observable<Auth[]> {
    return this._users.asObservable();
  }

  public set changeUsers(users: Auth[]) {
    this._users.next(users);
  }

  public get selectedUser(): Auth | null {
    return this._selectedUser;
  }

  public set changeSelectedUser(user: Auth | null) {
    this._selectedUser = user;
  }

  constructor(private _socketService: SocketService) {
    this.currentUser = new Auth(null, '', '');
    this._selectedUser = null;
    this._users = new BehaviorSubject<Auth[]>([]);
    this._getStatusOfSocket();
    this._getUsers();
  }

  addUser(user: IAuth): void {
    const sessionFromStorage = localStorage.getItem('session');
    let session: Session;
    if (sessionFromStorage) {
      session = JSON.parse(sessionFromStorage) as Session;
      this._socketService.connect();
    } else {
      this.currentUser = new Auth(null, user.name, user.phone);
      session = {
        sessionID: null,
        user: this.currentUser,
      };
    }
    this._socketService.addAuthToSocket(session);
    this._socketService.connect();
  }

  private _getUsers(): void {
    this._socketService.socket.on(UserEvents.GET_USERS, (users: Auth[]) => {
      this.changeUsers = [...users];
    });
  }

  private _getStatusOfSocket(): void {
    this._socketService.socketConnected$.pipe(take(1)).subscribe((socket) => {
      this.currentUser = new Auth(
        socket.id,
        this.currentUser.name,
        this.currentUser.phone
      );
      console.log(this.currentUser);
    });
  }
}
