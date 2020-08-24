import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-roi',
  templateUrl: './image-roi-control.component.html',
  styleUrls: ['./image-roi-control.component.css']
})
export class ImageRoiControlComponent implements OnInit, OnChanges {
  @Input() value: string;
  @Input() readonly: boolean;
  @Input() mounted: Function;
  @Input() update: Function;

  xMinValue = 0;
  xMaxValue = 0;
  yMinValue;
  yMaxValue: number;

  constructor() { }

  ngOnChanges() {
    console.log('change');
  }

  ngOnInit(): void {
    this.mounted();
    this.value = 'https://nostrahomes.com.au/uploads/cms/unknown.jpg';
  }

  modelChange(event) {
    console.log(event);
  }
}
