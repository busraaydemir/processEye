import { ReteModule } from 'rete-angular-render-plugin';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ImageRoiControlComponent } from './image-roi-control/image-roi-control.component';

@NgModule({
    declarations: [ImageRoiControlComponent],
    imports: [CommonModule, ReteModule, BrowserModule, FormsModule],
    exports: [ImageRoiControlComponent],
})
export class ImageRoiModule { }
