import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-camaperro',
  templateUrl: './camaperro.page.html',
  styleUrls: ['./camaperro.page.scss'],
})
export class CamaperroPage implements OnInit {

  infoProducto: any = [];

  constructor(private router: Router, private activatedRouter: ActivatedRoute) { 
    this.activatedRouter.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.infoProducto= this.router.getCurrentNavigation()?.extras.state?.["name"];
      }
    })
  }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
}
