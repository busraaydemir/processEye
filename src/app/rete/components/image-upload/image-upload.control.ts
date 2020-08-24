import { Control } from 'rete';
import { AngularControl } from 'rete-angular-render-plugin';

import { Type } from '@angular/core';

import { ImageUploadControlComponent } from './image-upload-control/image-upload-control.component';

export class ImageUploadControl extends Control implements AngularControl {
  component: Type<ImageUploadControlComponent>;
  props: { [key: string]: unknown };

  constructor(public emitter, public key, readonly = false) {
    super(key);
    this.component = ImageUploadControlComponent;
    this.props = {
      readonly,
      value: '',
      update: (val) => {
        this.setValue(val);
      }
    };
  }

  setValue(val) {
    this.props.value = val;
    this.putData(this.key, this.props.value);
    this.emitter.trigger('process');
  }
}
