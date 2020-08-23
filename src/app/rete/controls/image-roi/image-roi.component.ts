import { Component, OnInit, Type, Input } from '@angular/core';
import { Control } from 'rete';
import { AngularControl } from 'rete-angular-render-plugin';
import { ImageCroppedEvent } from '../../interfaces/image-roi-event.interface';
import { CropperPosition } from '../../interfaces/cropper-position.interface';

export class ImageRoiControl extends Control implements AngularControl {
  component: Type<ImageRoiControlComponent>;
  props: { [key: string]: unknown };
  @Input() cropper: CropperPosition = {
    x1: -100,
    y1: -100,
    x2: 10000,
    y2: 10000
  };

  constructor(public emitter, public key, readonly = false) {
    super(key);
    // tslint:disable-next-line: no-use-before-declare
    this.component = ImageRoiControlComponent;
    this.props = {
      readonly,
      change: v => this.onChange(v),
      value: 0,
      mounted: () => {
        this.setValue((this.getData(key) as any));
      }
    };
  }

  onChange(val) {
    // for input
    const input = val.target;
    const img: HTMLElement = document.createElement('img');
    img.setAttribute('src', input);
    img.setAttribute('style', "height:149px;width:280px;");

    const imagePosition = this.getImagePosition();
    const width = imagePosition.x2 - imagePosition.x1;
    const height = imagePosition.y2 - imagePosition.y1;
    
    const output: ImageCroppedEvent = {
      width: img.offsetWidth,
      height: img.offsetHeight,
      imagePosition,
      cropperPosition: { ...this.cropper }
    };
    // console.log(input);
    // const reader = new FileReader();
    // reader.onload = (event) => {
    //   this.setValue(event.target.result);
    //   this.emitter.trigger('process');
    // }
    // reader.readAsDataURL(input.files[0]);
    console.log(val);

    // for output
    this.setValue(val);
    this.emitter.trigger('process');

  }

  setValue(val) {
    console.log(val);
    this.props.value = val;
    this.putData(this.key, this.props.value);
  }
}

@Component({
  selector: 'app-image-roi',
  templateUrl: './image-roi.component.html',
  styleUrls: ['./image-roi.component.css']
})
export class ImageRoiControlComponent implements OnInit {
  @Input() value: string;
  @Input() readonly: boolean;
  @Input() mounted: Function;
  @Input() update: Function;

  constructor() { }

  ngOnInit(): void {
    this.mounted();
    this.value = 'https://nostrahomes.com.au/uploads/cms/unknown.jpg';
  }

}
