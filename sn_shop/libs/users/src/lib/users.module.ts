import { USERS_FEATURE_KEY } from './state/users.reducer';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users.component';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';

import * as fromUsers from './state/users.reducer';
import { EffectsModule } from '@ngrx/effects';
import { UsersEffects } from './state/users.effects';
import { UsersService } from '../public-api';
import { UsersFacade } from './state/users.facade';

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
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    InputTextModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forFeature(fromUsers.USERS_FEATURE_KEY, fromUsers.reducer),
    EffectsModule.forFeature([UsersEffects]),
  ],
  exports: [
    UsersComponent,
    LoginComponent,
    RegisterComponent,
  ]
  , providers: [UsersFacade]
})
export class UsersModule { }
