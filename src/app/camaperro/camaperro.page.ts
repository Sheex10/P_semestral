import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-camaperro',
  templateUrl: './camaperro.page.html',
  styleUrls: ['./camaperro.page.scss'],
})
export class CamaperroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
}
