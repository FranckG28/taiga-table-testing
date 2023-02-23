import { Component } from '@angular/core';
import { User, user1, user2 } from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  readonly columns = ['name', 'email', 'status', 'tags', 'actions'];

  users = [user1, user2];

  remove(item: User): void {
    this.users = this.users.filter(user => user !== item);
  }
}
