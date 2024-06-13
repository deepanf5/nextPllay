import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisneyPixarComponent } from './disney-pixar.component';

describe('DisneyPixarComponent', () => {
  let component: DisneyPixarComponent;
  let fixture: ComponentFixture<DisneyPixarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisneyPixarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisneyPixarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
