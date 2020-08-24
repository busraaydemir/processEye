import { ReteModule } from 'rete-angular-render-plugin';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ImageViewerControlComponent } from './image-viewer-control/image-viewer-control.component';

@NgModule({
  declarations: [ImageViewerControlComponent],
  imports: [CommonModule, ReteModule, BrowserModule, FormsModule],
  exports: [ImageViewerControlComponent],
})
export class ImageViewerModule { }
