import { Component, OnInit, Type, Input, OnChanges } from '@angular/core';
import { Control } from 'rete';
import { AngularControl } from 'rete-angular-render-plugin';
import { ImageCroppedEvent } from '../../interfaces/image-roi-event.interface';
import { CropperPosition } from '../../interfaces/cropper-position.interface';
import { threadId } from 'worker_threads';

export class ImageRoiControl extends Control implements AngularControl {
  component: Type<ImageRoiControlComponent>;
  props: { [key: string]: unknown };

  render = 'angular';

  constructor(public emitter, public key, readonly = false) {
    super(key);
    // tslint:disable-next-line: no-use-before-declare
    this.component = ImageRoiControlComponent;
    this.props = {
      value: {
        x1: 50,
        y1: 50,
        x2: 50,
        y2: 50
      } as CropperPosition,
      xMinValue: 50,
      yMinValue: 50,
      xMaxValue: 50,
      yMaxValue: 50,
      readonly,
      change: v => this.onChange(v),
      mounted: () => {
        this.setValue((this.getData(key) as any));
      }
    };
  }

  onChange(val) {
    console.log(val);

    if (val.id === 'x-min') { this.props.xMinValue = val.value; }
    if (val.id === 'x-max') { this.props.xMaxValue = val.value; }
    if (val.id === 'y-min') { this.props.yMinValue = val.value; }
    if (val.id === 'y-max') { this.props.yMaxValue = val.value; }

    // for output coordinates
    this.setValue(val);
    this.emitter.trigger('process');

  }

  setValue(val) {
    console.log(val);
    this.props.value = { x1: this.props.xMinValue, x2: this.props.xMaxValue, y1: this.props.yMinValue, y2: this.props.yMaxValue };
    this.putData(this.key, this.props.value);
  }

}

@Component({
  selector: 'app-image-roi',
  templateUrl: './image-roi.component.html',
  styleUrls: ['./image-roi.component.css']
})
export class ImageRoiControlComponent implements OnInit {
  @Input() value: CropperPosition = {
    x1: 0,
    y1: 0,
    x2: 0,
    y2: 0
  };
  @Input() readonly: boolean;
  @Input() mounted: Function;
  @Input() update: Function;

  // xMinValue;
  // xMaxValue;

  constructor() { }

  ngOnInit(): void {
    this.mounted();
  }

  modelChange(event) {
    console.log(event);
  }
}
