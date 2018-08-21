import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {UserService} from "../service/user.service";
import {User} from "../model/user.model";

@Component({
  selector: 'app-list-user',
  templateUrl: './user-details.component.html'
})
export class UserDetailsComponent implements OnInit {

  userDetails: Object = {};

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    this.userService.getUserDetails()
      .subscribe( data => {
        this.userDetails = data;
      });
  }

}
