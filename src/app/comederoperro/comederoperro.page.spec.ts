import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ComederoperroPage } from './comederoperro.page';

describe('ComederoperroPage', () => {
  let component: ComederoperroPage;
  let fixture: ComponentFixture<ComederoperroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ComederoperroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
