import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {
  users: User [];

  constructor(
    private userServise : UserService,
    private router : Router
  ) { }

  ngOnInit(): void {

    this.users = this.userServise.getUsers();
  }

  goToEditUser(user : User) {

    this.router.navigate(['user', user.id, 'edit']);
  }

  deleteUser(user : User){

    this.userServise.deleteUser(user);

    this.users = this.userServise.getUsers();
  }

}
