import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EdcomederogatoPage } from './edcomederogato.page';

describe('EdcomederogatoPage', () => {
  let component: EdcomederogatoPage;
  let fixture: ComponentFixture<EdcomederogatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(EdcomederogatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
