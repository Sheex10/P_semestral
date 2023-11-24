import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SQLite } from '@awesome-cordova-plugins/sqlite/ngx';
import { LoginPage } from './login.page';
import { ActivatedRoute } from '@angular/router';

describe('LoginPage', () => {
  const fakeActivatedRoute = {
    snapshot: { data: {  } }
  } as ActivatedRoute;
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async() => {
    await TestBed.configureTestingModule({
      providers: [{provide: ActivatedRoute, useValue: fakeActivatedRoute}, SQLite]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
