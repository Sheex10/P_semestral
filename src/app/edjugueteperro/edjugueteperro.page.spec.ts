import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdjugueteperroPage } from './edjugueteperro.page';

describe('EdjugueteperroPage', () => {
  let component: EdjugueteperroPage;
  let fixture: ComponentFixture<EdjugueteperroPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(EdjugueteperroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
