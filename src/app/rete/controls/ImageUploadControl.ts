import { Control } from "rete";
import { AngularControl } from "rete-angular-render-plugin";
import { Type,Component, Input } from "@angular/core";
import {NumberNgControl} from "./NgTestControl";

@Component({
    template: `        
      <div> <input
      type="file"
      [readonly]="readonly"
      (change)="change($event)"
      
         accept="image/*" /> </div>
        <img  src="{{value}}"  #ImageBase64 height="150" width="150" />
  `,
    styles: [
        `
      input {
        border-radius: 30px;
        background-color: white;
        padding: 2px 6px;
        border: 1px solid #999;
        font-size: 110%;
        width: 140px;
        box-sizing: border-box;
      }
    `
    ]
})
export class ImageUploadControlComponent {
    @Input() value: string;
    @Input() readonly: boolean;
    @Input() mounted: Function;
    @Input() update: Function;
    ngOnInit() {
        this.mounted();
        this.value="https://nostrahomes.com.au/uploads/cms/unknown.jpg";
    }
}

export class ImageUploadControl extends Control implements AngularControl {
    component: Type<ImageUploadControlComponent>;
    props: { [key: string]: unknown };

    constructor(public emitter, public key, readonly = false) {
        super(key);
        this.component = ImageUploadControlComponent;
        this.props = {
            readonly,
            change: event => this.onChange(event),
            value: "0",
            mounted: () => {
               this.setValue((this.getData(key) as any)||0 );
            }
        };

    }

    onChange(event) {
        const input = event.target;
        const reader = new FileReader();
        reader.onload = (event) => {
                this.setValue( event.target.result);
                this.emitter.trigger("process");
            }
        reader.readAsDataURL(input.files[0]);
    }

    setValue(val) {
        this.props.value = val;
        this.putData(this.key, this.props.value);
     }


}

