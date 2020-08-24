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
      change: event => this.onChange(event),
      value: '',
      mounted: () => {
        this.setValue((this.getData(key) as any) || 0);
      }
    };

  }

  onChange(event) {
    const input = event.target;
    const reader = new FileReader();
    reader.onload = (event) => {
      this.setValue(event.target.result);
      this.emitter.trigger('process');
    };
    reader.readAsDataURL(input.files[0]);
  }

  setValue(val) {
    this.props.value = val;
    this.putData(this.key, this.props.value);
  }


}
