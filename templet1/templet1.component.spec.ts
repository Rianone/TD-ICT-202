import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Templet1Component } from './templet1.component';

describe('Templet1Component', () => {
  let component: Templet1Component;
  let fixture: ComponentFixture<Templet1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Templet1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Templet1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
