import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasaperroPage } from './casaperro.page';

describe('CasaperroPage', () => {
  let component: CasaperroPage;
  let fixture: ComponentFixture<CasaperroPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(CasaperroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
