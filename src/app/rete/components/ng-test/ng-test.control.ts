import { Control } from 'rete';
import { AngularControl } from 'rete-angular-render-plugin';

import { Type } from '@angular/core';

import { NgTestControlComponent } from './ng-test-control/ng-test-control.component';

export class NgNumControl extends Control implements AngularControl {
  component: Type<NgTestControlComponent>;
  props: { [key: string]: unknown };

  constructor(public emitter, public key, readonly = false) {
    super(key);

    this.component = NgTestControlComponent;
    this.props = {
      readonly,
      change: v => this.onChange(v),
      value: 0,
      mounted: () => {
        this.setValue(+(this.getData(key) as any) || 0);
      }
    };
  }

  onChange(val: number) {
    this.setValue(val);
    this.emitter.trigger('process');
  }

  setValue(val: number) {
    this.props.value = +val;
    this.putData(this.key, this.props.value);
  }
}
