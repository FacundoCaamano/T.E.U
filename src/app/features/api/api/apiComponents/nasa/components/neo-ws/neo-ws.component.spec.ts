import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NeoWsComponent } from './neo-ws.component';

describe('NeoWsComponent', () => {
  let component: NeoWsComponent;
  let fixture: ComponentFixture<NeoWsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NeoWsComponent]
    });
    fixture = TestBed.createComponent(NeoWsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
