import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-jugueteperro',
  templateUrl: './jugueteperro.page.html',
  styleUrls: ['./jugueteperro.page.scss'],
})
export class JugueteperroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
}
