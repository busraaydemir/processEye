import { Control } from 'rete';
import { AngularControl } from 'rete-angular-render-plugin';

import { Type } from '@angular/core';

import { CropperPosition } from '../../interfaces/cropper-position.interface';
import { ImageRoiControlComponent } from './image-roi-control/image-roi-control.component';

export class ImageRoiControl extends Control implements AngularControl {
    component: Type<ImageRoiControlComponent>;
    props: { [key: string]: unknown };

    constructor(public emitter, public key, readonly = false) {
        super(key);
        this.component = ImageRoiControlComponent;
        this.props = {
            value: {
                x1: 50,
                y1: 50,
                x2: 50,
                y2: 50
            } as CropperPosition,
            xMinValue: 50,
            xMaxValue: 50,
            yMinValue: 50,
            yMaxValue: 50,
            readonly,
            change: v => this.onChange(v),
            mounted: () => {
                this.setValue((this.getData(key) as any));
            }
        };
    }

    onChange(val) {
        // for output coordinates
        // console.log(val);
        this.setValue(val);
        this.emitter.trigger('process');
    }

    setValue(val) {
        this.props.value = { x1: this.props.xMinValue, x2: this.props.xMaxValue, y1: this.props.yMinValue, y2: this.props.yMaxValue };
        this.putData(this.key, this.props.value);
    }
}
