import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageteamComponent } from './manageteam.component';

describe('ManageteamComponent', () => {
  let component: ManageteamComponent;
  let fixture: ComponentFixture<ManageteamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageteamComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ManageteamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
