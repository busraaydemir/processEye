import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload-control',
  templateUrl: './image-upload-control.component.html',
  styleUrls: ['./image-upload-control.component.css']
})
export class ImageUploadControlComponent implements OnInit {
  @Input() imgValue;
  @Input() readonly: boolean;
  @Input() mounted: Function;
  @Input() update: Function;

  constructor() { }

  ngOnInit(): void {
    this.mounted();
    this.imgValue = 'https://nostrahomes.com.au/uploads/cms/unknown.jpg';
  }
  readUrl(event: any) {
    if (event.target.files && event.target.files[0]) {
      let reader = new FileReader();

      reader.onload = (event: ProgressEvent) => {
        this.imgValue = (<FileReader>event.target).result;
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }
}
