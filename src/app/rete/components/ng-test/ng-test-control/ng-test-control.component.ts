import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng-test-control',
  templateUrl: './ng-test-control.component.html',
  styleUrls: ['./ng-test-control.component.css']
})
export class NgTestControlComponent implements OnInit {
  @Input() value: number;
  @Input() readonly: boolean;
  @Input() change: Function;
  @Input() mounted: Function;

  constructor() { }

  ngOnInit(): void {
    this.mounted();
  }

}
