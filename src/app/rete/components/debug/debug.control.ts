import { Control } from 'rete';
import { AngularControl } from 'rete-angular-render-plugin';

import { Type } from '@angular/core';

import { DebugControlComponent } from './debug-control/debug-control.component';

export class DebugControl extends Control implements AngularControl {
  component: Type<DebugControlComponent>;
  props: { [key: string]: unknown };

  constructor(public emitter, public key, readonly = false) {
    super(key);
    this.component = DebugControlComponent;
    this.props = {
      readonly,
      change: v => this.onChange(v),
      value: 0,
      mounted: () => {
        this.setValue((this.getData(key) as any));
      }
    };
  }

  onChange(val: number) {
    this.setValue(val);
    this.emitter.trigger('process');
  }

  setValue(val: number) {
    console.log(val);
    this.props.value = val;
    this.putData(this.key, this.props.value);
  }
}
