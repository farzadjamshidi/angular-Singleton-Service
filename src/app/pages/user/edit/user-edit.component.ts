import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from 'src/app/models/User';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: '../create/user-create.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  user: User;

  constructor(
    private userServise : UserService,
    private router : Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.route.params.subscribe(response => {

      const id : string = response.id;
      this.user = this.userServise.getUserById(id);
    })
  }

  createEditUser() {

    this.userServise.editUser(this.user);
    this.router.navigate(['users']);
  }
}
