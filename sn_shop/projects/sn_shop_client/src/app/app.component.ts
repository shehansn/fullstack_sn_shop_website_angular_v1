import { Component, OnInit } from '@angular/core';
import { UsersService } from 'libs/users/src/lib/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersService.initAppSession()
  }

  title = 'sn_shop_client';
}
