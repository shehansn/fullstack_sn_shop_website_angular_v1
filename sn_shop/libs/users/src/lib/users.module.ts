import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {

    path: 'login',
    component: LoginComponent,
  },
]

@NgModule({
  declarations: [
    UsersComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [CommonModule, RouterModule.forChild(routes), InputTextModule, ButtonModule, FormsModule, ReactiveFormsModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
