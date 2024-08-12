import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InSightComponent } from './in-sight.component';

describe('InSightComponent', () => {
  let component: InSightComponent;
  let fixture: ComponentFixture<InSightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InSightComponent]
    });
    fixture = TestBed.createComponent(InSightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
