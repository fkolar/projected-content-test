import {ChangeDetectorRef, Component, Host, OnInit, Optional} from '@angular/core';
import {ParentComponent} from '../parent.component';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  haveParent = false;


  constructor(private cd: ChangeDetectorRef,
              @Optional() @Host() private parent: ParentComponent) {
  }

  ngOnInit(): void {
    this.haveParent = !!this.parent;
  }
}
