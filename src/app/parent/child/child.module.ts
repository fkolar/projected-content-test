import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ChildComponent} from './child.component';


@NgModule({
  declarations: [
    ChildComponent
  ],
  exports: [ChildComponent],
  imports: [
    CommonModule
  ],
  providers: []
})
export class ChildModule {

}
