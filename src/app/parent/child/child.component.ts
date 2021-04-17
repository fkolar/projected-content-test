import {ChangeDetectorRef, Component, Host, Injector, OnInit, Optional} from '@angular/core';
import {ParentComponent} from '../parent.component';
import {StaticReflector} from '@angular/compiler';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})
export class ChildComponent implements OnInit {
  haveParent = false;


  constructor(private cd: ChangeDetectorRef,
              private injector: Injector,
              @Optional() @Host() private parent: ParentComponent) {
  }

  ngOnInit(): void {
    this.haveParent = !!this.parent;

    console.log('@@@@ => ', this.parent)

  }
}
