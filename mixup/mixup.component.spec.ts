import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MixupComponent } from './mixup.component';

describe('MixupComponent', () => {
  let component: MixupComponent;
  let fixture: ComponentFixture<MixupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MixupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MixupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
