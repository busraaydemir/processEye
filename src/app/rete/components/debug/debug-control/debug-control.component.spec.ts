import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DebugControlComponent } from './debug-control.component';

describe('DebugControlComponent', () => {
  let component: DebugControlComponent;
  let fixture: ComponentFixture<DebugControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DebugControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DebugControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
