import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CamagatoPage } from './camagato.page';

describe('CamagatoPage', () => {
  let component: CamagatoPage;
  let fixture: ComponentFixture<CamagatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CamagatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
