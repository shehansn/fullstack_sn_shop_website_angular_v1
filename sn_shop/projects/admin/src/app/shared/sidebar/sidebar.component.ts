import { Component, OnInit } from '@angular/core';
import { AuthService } from 'libs/users/src/lib/services/auth.service';

@Component({
  selector: 'admin-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  constructor(private authService: AuthService) { }

  ngOnInit(): void { }

  logoutUser() {
    this.authService.logout();
    console.log('logged out clicked')
  }
}
