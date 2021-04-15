import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';
import {User} from '../model/user';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  object: User;
  operation = 'view';

  constructor(cd: ChangeDetectorRef, public injector: Injector) {
  }

  ngOnInit(): void {
  }
}

