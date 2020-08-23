import { Control } from "rete";
import { AngularControl } from "rete-angular-render-plugin";
import { Type, Component, Input } from "@angular/core";


@Component({
    template: `
    <input
      type="text"
      [value]="value"
      [readonly]="readonly"
      (change)="change($event.target.value)"
    />
    `,
    styles: [     `
      
    `
    ]
})
export class DebugControlComponent {
    @Input() value: number;
    @Input() readonly: boolean;
    @Input() change: Function;
    @Input() mounted: Function;
    ngOnInit() {
        this.mounted();
    }
}

export class DebugControl extends Control implements AngularControl {
    component: Type<DebugControlComponent>;
    props: { [key: string]: unknown };

    constructor(public emitter, public key, readonly = false) {
        super(key);
        this.component = DebugControlComponent;
        this.props = {
            readonly,
            change: v => this.onChange(v),
            value: 0,
            mounted: () => {
                this.setValue((this.getData(key) as any));
            }
        };
    }

    onChange(val: number) {
        this.setValue(val);
        this.emitter.trigger("process");
    }

    setValue(val: number) {
        console.log(val);
        this.props.value = val;
        this.putData(this.key, this.props.value);
    }
}
