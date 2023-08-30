import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdcasaperroPage } from './edcasaperro.page';

describe('EdcasaperroPage', () => {
  let component: EdcasaperroPage;
  let fixture: ComponentFixture<EdcasaperroPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdcasaperroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
