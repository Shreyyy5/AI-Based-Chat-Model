import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessgoalsComponent } from './businessgoals.component';

describe('BusinessgoalsComponent', () => {
  let component: BusinessgoalsComponent;
  let fixture: ComponentFixture<BusinessgoalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BusinessgoalsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BusinessgoalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
