import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comederoperro',
  templateUrl: './comederoperro.page.html',
  styleUrls: ['./comederoperro.page.scss'],
})
export class ComederoperroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
}
