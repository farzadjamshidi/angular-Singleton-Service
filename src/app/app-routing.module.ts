import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserCreateComponent } from './pages/user/create/user-create.component';
import { UserEditComponent } from './pages/user/edit/user-edit.component';
import { UserListComponent } from './pages/user/list/user-list.component';


const routes: Routes = [
  { path : "users", component: UserListComponent},
  { path : "user/create", component: UserCreateComponent},
  { path : "user/:id/edit", component: UserEditComponent},
  { path : "**" , redirectTo:"users" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
