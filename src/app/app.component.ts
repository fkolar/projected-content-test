import {
  Compiler,
  Component,
  ComponentFactoryResolver,
  ComponentRef,
  Injector,
  OnInit,
  Renderer2,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {ChildModule} from './parent/child/child.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('vc', {static: true, read: ViewContainerRef})
  vc: ViewContainerRef;



  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
              private render: Renderer2, private compiler: Compiler, private injector: Injector) {
  }

  ngOnInit(): void {
    // const factory = this.crf.resolveComponentFactory(ChildComponent);
    // const ref = this.vc.createComponent(factory, 0, this.vc.injector);

    const module = this.compiler.compileModuleAndAllComponentsSync(ChildModule);
    const moduleNgModuleRef = module.ngModuleFactory.create(null);
    console.log(module.componentFactories[0]);
    const cmdFactory = module.componentFactories[0];
    const component: ComponentRef<ChildModule> = this.viewContainer.createComponent(cmdFactory, null,
      null, [[]], moduleNgModuleRef);
    console.log(component);
  }

}
