import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-camagato',
  templateUrl: './camagato.page.html',
  styleUrls: ['./camagato.page.scss'],
})
export class CamagatoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
}
