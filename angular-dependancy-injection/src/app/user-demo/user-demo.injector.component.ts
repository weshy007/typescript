import { Component, Injector } from '@angular/core';

import { UserService } from '../services/user.service';

@Component({
  selector: 'app-injector-demo',
  templateUrl: './user-demo.component.html',
  styleUrls: ['./user-demo.component.css']
})
export class UserDemoInjectorComponent {
  userName: string | undefined;
  userService: UserService;

  constructor() {
    // Create an _injector_ and ask for it to resolve and create a UserService
    const injector: Injector = Injector.create({
      providers: [{ provide: UserService, useClass: UserService }]
    });

// Now you can use the injector to get instances of your services
    const userService: UserService = injector.get(UserService);

    // use the injector to **get the instance** of the UserService
    this.userService = injector.get(UserService);
  }

  signIn(): void {
    // when we sign in, set the user
    // this mimics filling out a login form
    this.userService.setUser({
      name: 'Nate Murray'
    });

    // now **read** the user name from the service
    this.userName = this.userService.getUser().name;
    console.log('User name is: ', this.userName);
  }
}
