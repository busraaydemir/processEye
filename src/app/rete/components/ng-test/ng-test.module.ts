import { ReteModule } from 'rete-angular-render-plugin';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { NgTestControlComponent } from './ng-test-control/ng-test-control.component';

@NgModule({
  declarations: [NgTestControlComponent],
  imports: [CommonModule, ReteModule, BrowserModule, FormsModule],
  exports: [NgTestControlComponent],
})
export class NgTestModule { }
