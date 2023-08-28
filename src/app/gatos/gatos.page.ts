import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.page.html',
  styleUrls: ['./gatos.page.scss'],
})
export class GatosPage implements OnInit {

  constructor(private router: Router) { 

  }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
  goTocamagato(){
    this.router.navigate(['/camagato'])
    
  }

  goTocasagato(){
    this.router.navigate(['/casagato'])
    
  }

  goTocomederogato(){
    this.router.navigate(['/comederogato'])
    
  }

  goTojuguetegato(){
    this.router.navigate(['/juguetegato'])
    
  }

}
