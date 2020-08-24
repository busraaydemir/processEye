import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload-control',
  templateUrl: './image-upload-control.component.html',
  styleUrls: ['./image-upload-control.component.css']
})
export class ImageUploadControlComponent implements OnInit {
  @Input() value: string;
  @Input() readonly: boolean;
  @Input() mounted: Function;
  @Input() update: Function;

  constructor() { }

  ngOnInit(): void {
    this.mounted();
    this.value = "https://nostrahomes.com.au/uploads/cms/unknown.jpg";
  }

}
