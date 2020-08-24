import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReteModule } from 'rete-angular-render-plugin';
import { NumberNgControl } from './components/ng-test/NgTestControl';
import { ImageUploadControlComponent } from './components/image-upload/ImageUploadControl';
import { ReteComponent } from './rete.component';
import { ImageRoiModule } from './components/image-roi/image-roi.module';
@NgModule({
    declarations: [ReteComponent, NumberNgControl, ImageUploadControlComponent],
    imports: [CommonModule, ReteModule, ImageRoiModule],
    exports: [ReteComponent, ReteModule],
    entryComponents: [NumberNgControl, ImageUploadControlComponent]
})
export class MyReteEditorModule { }
