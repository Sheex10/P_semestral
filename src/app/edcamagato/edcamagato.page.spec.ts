import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdcamagatoPage } from './edcamagato.page';

describe('EdcamagatoPage', () => {
  let component: EdcamagatoPage;
  let fixture: ComponentFixture<EdcamagatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdcamagatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
