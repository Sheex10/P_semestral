import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CasagatoPage } from './casagato.page';

describe('CasagatoPage', () => {
  let component: CasagatoPage;
  let fixture: ComponentFixture<CasagatoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(CasagatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
