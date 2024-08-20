import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TryMyAgentComponent } from './try-my-agent.component';

describe('TryMyAgentComponent', () => {
  let component: TryMyAgentComponent;
  let fixture: ComponentFixture<TryMyAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TryMyAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TryMyAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
