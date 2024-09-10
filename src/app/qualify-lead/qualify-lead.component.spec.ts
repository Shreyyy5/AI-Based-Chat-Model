import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyLeadComponent } from './qualify-lead.component';

describe('QualifyLeadComponent', () => {
  let component: QualifyLeadComponent;
  let fixture: ComponentFixture<QualifyLeadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QualifyLeadComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QualifyLeadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
