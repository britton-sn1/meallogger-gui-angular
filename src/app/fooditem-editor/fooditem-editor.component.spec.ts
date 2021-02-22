import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooditemEditorComponent } from './fooditem-editor.component';

describe('FooditemEditorComponent', () => {
  let component: FooditemEditorComponent;
  let fixture: ComponentFixture<FooditemEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooditemEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooditemEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
