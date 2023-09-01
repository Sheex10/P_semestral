import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menuadmin',
  templateUrl: './menuadmin.page.html',
  styleUrls: ['./menuadmin.page.scss'],
})
export class MenuadminPage implements OnInit {
  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocuenta() {
    this.router.navigate(['/cuenta'])
  }

  goToeditPd() {
    this.router.navigate(['/editarpd'])
  }

  goTologin() {
    this.router.navigate(['/login'])
  }
  goToeditarperfil2() {
    this.router.navigate(['/editarperfil2'])

  }
}
