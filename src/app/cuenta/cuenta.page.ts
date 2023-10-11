import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goToeditarperfil() {
    this.router.navigate(['/editarperfil'])

  }
  goToeditarpd() {
    this.router.navigate(['/editarpd'])

  }
}


