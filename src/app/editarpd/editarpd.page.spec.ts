import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditarpdPage } from './editarpd.page';

describe('EditarpdPage', () => {
  let component: EditarpdPage;
  let fixture: ComponentFixture<EditarpdPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(EditarpdPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
