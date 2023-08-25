import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JuguetegatoPage } from './juguetegato.page';

describe('JuguetegatoPage', () => {
  let component: JuguetegatoPage;
  let fixture: ComponentFixture<JuguetegatoPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(JuguetegatoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
