import { ReteModule } from 'rete-angular-render-plugin';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ImageUploadControlComponent } from './image-upload-control/image-upload-control.component';

@NgModule({
  declarations: [ImageUploadControlComponent],
  imports: [CommonModule, ReteModule, BrowserModule, FormsModule],
  exports: [ImageUploadControlComponent],
})
export class ImageUploadModule { }
