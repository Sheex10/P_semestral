import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ProductoedPage } from './productoed.page';

describe('ProductoedPage', () => {
  let component: ProductoedPage;
  let fixture: ComponentFixture<ProductoedPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ProductoedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
