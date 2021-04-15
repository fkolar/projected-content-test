import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MetaConfig} from '@ngx-metaui/rules';
import {ParentComponent} from './parent/parent.component';
import {ChildComponent} from './parent/child/child.component';


@NgModule({
  declarations: [
    AppComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {


  constructor(private config: MetaConfig) {
    // mandatory - you need to register app defined rules and types

    // config.registerRules(userRules);

  }
}
