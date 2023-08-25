import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComederogatoPage } from './comederogato.page';

describe('ComederogatoPage', () => {
  let component: ComederogatoPage;
  let fixture: ComponentFixture<ComederogatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComederogatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
