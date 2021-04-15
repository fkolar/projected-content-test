import {ChangeDetectorRef, Component, Injector, OnInit} from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {

  constructor(cd: ChangeDetectorRef, public injector: Injector) {
  }

  ngOnInit(): void {
  }
}

