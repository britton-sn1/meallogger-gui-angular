import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditempickerComponent } from './fooditempicker.component';

describe('FooditempickerComponent', () => {
  let component: FooditempickerComponent;
  let fixture: ComponentFixture<FooditempickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooditempickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditempickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
