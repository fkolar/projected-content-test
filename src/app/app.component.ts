import {Compiler, Component, ComponentFactoryResolver, ComponentRef, OnInit, Renderer2, ViewContainerRef} from '@angular/core';
import {MyButtonComponent} from './my-button/my-button.component';
import {ComplexComponentComponent} from './complex-component/complex-component.component';
import {ComplexComponentModule} from './complex-component/complex-component.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'projected-content-test';


  constructor(private viewContainer: ViewContainerRef, private crf: ComponentFactoryResolver,
              private render: Renderer2, private compiler: Compiler) {
  }

  ngOnInit(): void {

    // const factory = this.crf.resolveComponentFactory(ComplexComponentComponent);
    // const ref = this.viewContainer.createComponent(factory, 0, null);
    //
    // const context = new Map();
    // context.set('value', '@aaaa');
    // this.applyBindings(ref.instance, 'value', context);

    const module = this.compiler.compileModuleAndAllComponentsSync(ComplexComponentModule);
    console.log(module.componentFactories[0]);
    const cmdFactory = module.componentFactories[0];

    const component: ComponentRef<ComplexComponentComponent> = this.viewContainer.createComponent(cmdFactory);
  }

  private applyBindings(instance: MyButtonComponent, key: string, context: Map<any, any>): void {
    const origDescriptor = Object.getOwnPropertyDescriptor(instance.constructor.prototype, key);
    const origRefSetter = origDescriptor ? origDescriptor.set : null;

    const pathBinding = new ContextFieldPathBinding(context, instance);
    pathBinding.init(key, key, true);

  }
}


class ContextFieldPathBinding {

  constructor(private metaContext: Map<any, any>, private componentInstance: any) {
  }

  init(bindingName: string, cnxFieldPath: string, isInput: boolean = true): void {

    Object.defineProperty(this.componentInstance, bindingName, {
      get: () => {
        return this.value();
      },

      set: (val) => {
        this.setValue(val);
      },
      enumerable: true,
      configurable: true
    });

  }


  value(): any {
    return this.metaContext.get('value');
  }

  setValue(value: any): void {
    console.log('setting value: ', value);
  }


}
