import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-casagato',
  templateUrl: './casagato.page.html',
  styleUrls: ['./casagato.page.scss'],
})
export class CasagatoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
}
