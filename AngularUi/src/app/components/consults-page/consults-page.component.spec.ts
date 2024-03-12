import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultsPageComponent } from './consults-page.component';

describe('ConsultsPageComponent', () => {
  let component: ConsultsPageComponent;
  let fixture: ComponentFixture<ConsultsPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConsultsPageComponent]
    });
    fixture = TestBed.createComponent(ConsultsPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
