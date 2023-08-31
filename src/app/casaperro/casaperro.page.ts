import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-casaperro',
  templateUrl: './casaperro.page.html',
  styleUrls: ['./casaperro.page.scss'],
})
export class CasaperroPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
 
}
