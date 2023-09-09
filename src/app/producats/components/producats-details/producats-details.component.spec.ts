import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducatsDetailsComponent } from './producats-details.component';

describe('ProducatsDetailsComponent', () => {
  let component: ProducatsDetailsComponent;
  let fixture: ComponentFixture<ProducatsDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProducatsDetailsComponent]
    });
    fixture = TestBed.createComponent(ProducatsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
