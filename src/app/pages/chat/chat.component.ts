import { Component, OnInit } from '@angular/core';

import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PannelChatComponent } from './components/pannel-chat/pannel-chat.component';

@Component({
  standalone: true,
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss'],
  imports: [SidebarComponent, PannelChatComponent],
})
export class ChatComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
