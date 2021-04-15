import {Compiler, Component, ComponentFactoryResolver, Injector, OnInit, Renderer2, ViewChild, ViewContainerRef} from '@angular/core';
import {ChildComponent} from './parent/child/child.component';
import {ParentComponent} from './parent/parent.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild('vc', {static: true, read: ViewContainerRef})
  vc: ViewContainerRef;

  @ViewChild('parent', {static: true})
  parent: ParentComponent;


  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
              private render: Renderer2, private compiler: Compiler, private injector: Injector) {
  }

  ngOnInit(): void {
    const factory = this.crf.resolveComponentFactory(ChildComponent);
    const ref = this.vc.createComponent(factory, 0, this.injector);


    // const module = this.compiler.compileModuleAndAllComponentsSync(ComplexComponentModule);
    // const moduleNgModuleRef = module.ngModuleFactory.create(this.injector);
    // console.log(module.componentFactories[0]);
    // const cmdFactory = module.componentFactories[0];
    // const component: ComponentRef<ComplexComponentComponent> = this.viewContainer.createComponent(cmdFactory, null,
    //   this.injector, [[]], moduleNgModuleRef);
    // console.log(component);
  }

}
