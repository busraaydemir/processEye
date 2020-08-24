import { ReteModule } from 'rete-angular-render-plugin';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { DebugControlComponent } from './debug-control/debug-control.component';

@NgModule({
  declarations: [DebugControlComponent],
  imports: [CommonModule, ReteModule, BrowserModule, FormsModule],
  exports: [DebugControlComponent],
})
export class DebugModule { }
