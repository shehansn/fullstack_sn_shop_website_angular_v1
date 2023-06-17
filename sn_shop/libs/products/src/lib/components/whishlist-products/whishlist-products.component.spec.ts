import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhishlistProductsComponent } from './whishlist-products.component';

describe('WhishlistProductsComponent', () => {
  let component: WhishlistProductsComponent;
  let fixture: ComponentFixture<WhishlistProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhishlistProductsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhishlistProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
