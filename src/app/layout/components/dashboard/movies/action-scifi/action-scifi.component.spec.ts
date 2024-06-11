import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActionScifiComponent } from './action-scifi.component';

describe('ActionScifiComponent', () => {
  let component: ActionScifiComponent;
  let fixture: ComponentFixture<ActionScifiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ActionScifiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActionScifiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
