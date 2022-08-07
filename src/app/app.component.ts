import { Component } from '@angular/core';
import { SocketService } from '@services/socket.service';
import { Session } from './models/session.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'whatsapp-clone';

  constructor(private _socketService: SocketService) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    const sessionFromStorage = localStorage.getItem('session');
    if (sessionFromStorage) {
      const session = JSON.parse(sessionFromStorage) as Session;
      this._socketService.addAuthToSocket(session);
      this._socketService.connect();
    }
  }
}
