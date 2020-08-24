import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-debug-control',
  templateUrl: './debug-control.component.html',
  styleUrls: ['./debug-control.component.css']
})
export class DebugControlComponent implements OnInit {
  @Input() value: number;
  @Input() readonly: boolean;
  @Input() change: Function;
  @Input() mounted: Function;

  constructor() { }

  ngOnInit(): void {
    this.mounted();
  }

}
