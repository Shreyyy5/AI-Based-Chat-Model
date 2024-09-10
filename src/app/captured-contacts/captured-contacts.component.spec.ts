import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CapturedContactsComponent } from './captured-contacts.component';

describe('CapturedContactsComponent', () => {
  let component: CapturedContactsComponent;
  let fixture: ComponentFixture<CapturedContactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CapturedContactsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CapturedContactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
