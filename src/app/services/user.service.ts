import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {
      
  users : User[] = [];

  constructor() { 

    var sampleUsers = [
      {
        firstName : "Ali", 
        lastName : "Sobhani",
        email : "a.s@hotmail.com"
      },
      {
        firstName : "Narges", 
        lastName : "Shirazi",
        email : "n.s@hotmail.com"
      },
      {
        firstName : "Reza", 
        lastName : "Akbari",
        email : "r.a@hotmail.com"
      },
    ];

    sampleUsers.forEach(item => {

      this.users.push(new User(item));

    })

  }

  public getUsers() {

    return this.users;           
  }

  public editUser(user: User) {

    const indexOfUserForEdit = this.users.findIndex((item) => { return item.id === user.id});
    this.users[indexOfUserForEdit] =  user;
  }

  public deleteUser(user: User) {
    const indexOfUserForDeletion = this.users.findIndex((item) => { return item.id === user.id});
    this.users.splice(indexOfUserForDeletion , 1);
  }
  
  public createUser(user: User) {
    this.users.push(user);
  }

  public getUserById(userId: string): User {

    return this.users.find((item) => { return item.id === userId});
        
  }

}
