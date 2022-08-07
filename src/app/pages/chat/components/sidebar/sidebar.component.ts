import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

import { Auth } from '@models/auth.model';
import { UserService } from '@services/user.service';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule],
})
export class SidebarComponent implements OnInit {
  constructor(public userService: UserService) {}

  ngOnInit(): void {
    // setTimeout(() => {
    //   console.log(this._userService.users);
    // }, 5000);
  }

  changeSelectUser(user: Auth) {
    this.userService.changeSelectedUser = user;
  }
}
