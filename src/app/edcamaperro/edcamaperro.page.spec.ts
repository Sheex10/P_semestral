import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdcamaperroPage } from './edcamaperro.page';

describe('EdcamaperroPage', () => {
  let component: EdcamaperroPage;
  let fixture: ComponentFixture<EdcamaperroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdcamaperroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
