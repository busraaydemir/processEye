import { Control } from 'rete';
import { AngularControl } from 'rete-angular-render-plugin';

import { Type } from '@angular/core';

import { ImageViewerControlComponent } from './image-viewer-control/image-viewer-control.component';

export class ImageViewerControl extends Control implements AngularControl {
  component: Type<ImageViewerControlComponent>;
  props: { [key: string]: unknown };

  constructor(public emitter, public key, readonly = false) {
    super(key);
    this.component = ImageViewerControlComponent;
    this.props = {
      readonly,
      change: v => this.onChange(v),
      value: 0,
      mounted: () => {
        this.setValue((this.getData(key) as any));
      }
    };
  }

  onChange(val: unknown) {
    this.setValue(val);
    this.emitter.trigger('process');

  }

  setValue(val) {
    this.props.value = val;
    this.putData(this.key, this.props.value);
  }
}
