import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamaperroPage } from './camaperro.page';

describe('CamaperroPage', () => {
  let component: CamaperroPage;
  let fixture: ComponentFixture<CamaperroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamaperroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
