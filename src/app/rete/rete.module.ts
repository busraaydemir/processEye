import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ReteModule } from "rete-angular-render-plugin";
import { NumberNgControl } from "./controls/NgTestControl";
import { ImageUploadControlComponent } from "./controls/ImageUploadControl";
import { ReteComponent } from "./rete.component";

@NgModule({
    declarations: [ReteComponent, NumberNgControl, ImageUploadControlComponent],
    imports: [CommonModule, ReteModule],
    exports: [ReteComponent, ReteModule],
    entryComponents: [NumberNgControl, ImageUploadControlComponent]
})
export class MyReteEditorModule { }
