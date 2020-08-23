import { Control } from "rete";
import { AngularControl } from "rete-angular-render-plugin";
import { Type, Component, Input } from "@angular/core";

@Component({
    template: ` <img  src="{{value}}"  #ImageBase64 height="150" width="150" />  `,
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
export class ImageViewerControlComponent {
    @Input() value: string;
    @Input() readonly: boolean;
    @Input() mounted: Function;
    @Input() update: Function;
    ngOnInit() {
        this.mounted();
        this.value = "https://nostrahomes.com.au/uploads/cms/unknown.jpg";
    }
}

export class ImageViewerControl extends Control implements AngularControl {
    component: Type<ImageViewerControlComponent>;
    props: { [key: string]: unknown };

    constructor(public emitter, public key, readonly = false) {
        super(key);
        this.component = ImageViewerControlComponent;
        this.props = {
            readonly,
            change: v => this.onChange(v),
            value: 0,
            mounted: () => {
                this.setValue((this.getData(key) as any));
            }
        };
    }

    onChange(val: unknown) {
        this.setValue(val);
        this.emitter.trigger("process");

    }

    setValue(val) {
        this.props.value = val;
        this.putData(this.key, this.props.value);
    }


}

