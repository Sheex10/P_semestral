import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdcasagatoPage } from './edcasagato.page';

describe('EdcasagatoPage', () => {
  let component: EdcasagatoPage;
  let fixture: ComponentFixture<EdcasagatoPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(EdcasagatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
