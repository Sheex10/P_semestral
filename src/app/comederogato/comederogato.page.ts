import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-comederogato',
  templateUrl: './comederogato.page.html',
  styleUrls: ['./comederogato.page.scss'],
})
export class ComederogatoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
}
