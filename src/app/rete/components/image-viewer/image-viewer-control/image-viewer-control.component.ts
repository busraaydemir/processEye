import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-viewer-control',
  templateUrl: './image-viewer-control.component.html',
  styleUrls: ['./image-viewer-control.component.css']
})
export class ImageViewerControlComponent implements OnInit {
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
