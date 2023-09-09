import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllProducatsComponent } from './all-producats.component';

describe('AllProducatsComponent', () => {
  let component: AllProducatsComponent;
  let fixture: ComponentFixture<AllProducatsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllProducatsComponent]
    });
    fixture = TestBed.createComponent(AllProducatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
