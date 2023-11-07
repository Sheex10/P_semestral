import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JugueteperroPage } from './jugueteperro.page';

describe('JugueteperroPage', () => {
  let component: JugueteperroPage;
  let fixture: ComponentFixture<JugueteperroPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(JugueteperroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
