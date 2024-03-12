import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HerbsCatalogComponent } from './herbs-catalog.component';

describe('HerbsCatalogComponent', () => {
  let component: HerbsCatalogComponent;
  let fixture: ComponentFixture<HerbsCatalogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HerbsCatalogComponent]
    });
    fixture = TestBed.createComponent(HerbsCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
