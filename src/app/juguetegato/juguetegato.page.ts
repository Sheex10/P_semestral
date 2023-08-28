import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-juguetegato',
  templateUrl: './juguetegato.page.html',
  styleUrls: ['./juguetegato.page.scss'],
})
export class JuguetegatoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
}
