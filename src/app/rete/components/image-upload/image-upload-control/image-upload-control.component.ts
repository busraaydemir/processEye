import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-image-upload-control',
  templateUrl: './image-upload-control.component.html',
  styleUrls: ['./image-upload-control.component.css']
})
export class ImageUploadControlComponent implements OnInit {
  @Input('imgValue') get imgValue(): string | ArrayBuffer {
    return this._imgValue;
  }
  set imgValue(val: string | ArrayBuffer) {
    this._imgValue = val;
    this.update(this._imgValue);
  }

  @Input() readonly: boolean;
  @Input() update: Function;

  private _imgValue;

  constructor() { }

  ngOnInit(): void {
    if (!this.imgValue) {
      this.imgValue = `https://lh3.googleusercontent.com/proxy/oCePzMWtueYbhI2-2s2-DZIfO5HuF84q6wO3TkML2UL1gm8sHylWu4tvZXN2GCnrun5r4cxIbnyM_uoWiSXkmiWUGcalZWZPG0cZumZAi2oXZaj_mfBGUnCvBQtUNyo`;
    }
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
