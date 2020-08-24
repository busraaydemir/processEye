import { Component, OnInit, Type, Input, OnChanges, Output, ChangeDetectorRef, ChangeDetectionStrategy, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { Control } from 'rete';
import { AngularControl, NodeService, NodeComponent, AngularRenderPlugin } from 'rete-angular-render-plugin';
import { ImageCroppedEvent } from '../../interfaces/image-roi-event.interface';
import { CropperPosition } from '../../interfaces/cropper-position.interface';
import { threadId } from 'worker_threads';

export class ImageRoiControl extends Control implements AngularControl {
  component: Type<ImageRoiControlComponent>;
  props: { [key: string]: unknown };
  @Input() cropper: CropperPosition = {
    x1: -100,
    y1: -100,
    x2: 10000,
    y2: 10000
  };


  render = 'angular';

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
    if (val.id === 'x-min') { this.props.xMinValue = val.value; }
    if (val.id === 'x-max') { this.props.xMaxValue = val.value; }
    if (val.id === 'y-min') { this.props.yMinValue = val.value; }
    if (val.id === 'y-max') { this.props.yMaxValue = val.value; }
    console.log(this.props.xMinValue);
    // const input = val.target;
    // const img: HTMLElement = document.createElement('img');
    // img.setAttribute('src', input);
    // img.setAttribute('style', "height:149px;width:280px;");

    // const imagePosition = this.getImagePosition();
    // const width = this.props.xMaxValue - this.props.xMinValue;
    // const height = imagePosition.y2 - imagePosition.y1;

    // const output: ImageCroppedEvent = {
    //   width: img.offsetWidth,
    //   height: img.offsetHeight,
    //   imagePosition,
    //   cropperPosition: { ...this.cropper }
    // };
    // console.log(input);
    // const reader = new FileReader();
    // reader.onload = (event) => {
    //   this.setValue(event.target.result);
    //   this.emitter.trigger('process');
    // }
    // reader.readAsDataURL(input.files[0]);value1

    // for output
    // this.setValue(val);
    // this.emitter.trigger('process');

  }

  setValue(val) {
    // console.log(val);
    // this.props.value = val;
    // this.putData(this.key, this.props.value);
  }
}

@Component({
  selector: 'app-image-roi',
  templateUrl: './image-roi.component.html',
  styleUrls: ['./image-roi.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [NodeService]
})
export class ImageRoiControlComponent extends NodeComponent implements OnInit, OnChanges, AfterViewInit {
  @Input() value: string;
  @Input() readonly: boolean;
  @Input() mounted: Function;
  @Input() update: Function;

  xMinValue = 0;
  xMaxValue = 0;

  constructor(protected service: NodeService,
    protected cdr: ChangeDetectorRef) {
    super(service, cdr);
  }


  async ngAfterViewInit() {
    this.editor.use(AngularRenderPlugin, { component: ImageRoiControlComponent });
  }

  ngOnInit(): void {
    console.log('onitni');
    this.mounted();
    this.value = 'https://nostrahomes.com.au/uploads/cms/unknown.jpg';
  }

  ngOnChanges(change) {
    console.log('change');
    console.log(change);
  }

  ngChange(event) {
    console.log(event);
  }
}
