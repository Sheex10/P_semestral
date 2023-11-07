import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { EdcomederoperroPage } from './edcomederoperro.page';

describe('EdcomederoperroPage', () => {
  let component: EdcomederoperroPage;
  let fixture: ComponentFixture<EdcomederoperroPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(EdcomederoperroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
