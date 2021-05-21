import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.scss']
})
export class UserCreateComponent {

  user : any = {};

  constructor(
    private userService : UserService,
    private router : Router
  ) { }

  createEditUser() {

    this.userService.createUser(this.user);

    this.router.navigate(['users']);
  }

}
