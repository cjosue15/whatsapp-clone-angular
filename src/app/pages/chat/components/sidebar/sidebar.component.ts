import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  imports: [CommonModule],
})
export class SidebarComponent implements OnInit {
  users: any[];
  constructor() {
    this.users = [1, 2, 3, 4, 5, 6];
  }

  ngOnInit(): void {}
}
