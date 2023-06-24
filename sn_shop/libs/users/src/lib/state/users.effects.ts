import { Injectable } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';

import * as UsersActions from './users.actions';
import * as UsersFeature from './users.reducer';

import { switchMap, catchError, of } from 'rxjs';
import { concatMap, map } from 'rxjs/operators';
import { LocalstorageService } from '../services/localstorage.service';
import { UsersService } from '../services/users.service';

@Injectable()
export class UsersEffects {
  buildUserSession$ = createEffect(() => this.actions$.pipe(
    ofType(UsersActions.buildUserSession),
    concatMap(() => {
      if (this.localstorageService.isValidToken()) {
        const userId = this.localstorageService.getUserIdFromToken();
        console.log('userId', userId);
        if (userId) {
          return this.usersService.getUser(userId).pipe(
            map((user) => {
              return UsersActions.buildUserSessionSuccess({ user: user });
            }),
            catchError(() => of(UsersActions.buildUserSessionFailed()))
          );
        } else {
          return of(UsersActions.buildUserSessionFailed());
        }

      } else {
        return of(UsersActions.buildUserSessionFailed());
      }
    })
  ));

  constructor(
    private actions$: Actions,
    private localstorageService: LocalstorageService,
    private usersService: UsersService
  ) { }

}
