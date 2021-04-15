import {Component, OnInit} from '@angular/core';
import {User} from '../model/user' ;



@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.scss']
})
export class UserDetailComponent implements OnInit {

  object: User;
  operation = 'view';

  constructor() {
  }

  ngOnInit(): void {

    this.object = new User('R0001', 'Frank Kolar',
    'This is my user record', new Date());
  }
}

