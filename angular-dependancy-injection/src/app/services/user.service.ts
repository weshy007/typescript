import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
  user: any;

  setUser(newUser: { name: string; }) {
    this.user = newUser;
  }

  getUser(): any {
    return this.user;
  }
}
