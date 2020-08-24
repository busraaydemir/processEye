import { ReteModule } from 'rete-angular-render-plugin';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DebugModule } from './components/debug/debug.module';
import { ImageRoiModule } from './components/image-roi/image-roi.module';
import { ImageUploadModule } from './components/image-upload/image-upload.module';
import { ImageViewerModule } from './components/image-viewer/image-viewer.module';
import { NgTestModule } from './components/ng-test/ng-test.module';
import { ReteComponent } from './rete.component';

@NgModule({
    declarations: [ReteComponent],
    imports: [CommonModule, ReteModule, ImageRoiModule, DebugModule, ImageUploadModule, ImageViewerModule, NgTestModule],
    exports: [ReteComponent, ReteModule],
})
export class MyReteEditorModule { }
