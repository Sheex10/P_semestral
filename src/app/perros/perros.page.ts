import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';



@Component({
  selector: 'app-perros',
  templateUrl: './perros.page.html',
  styleUrls: ['./perros.page.scss'],
})
export class PerrosPage implements OnInit {

  constructor(private router: Router) { 
    
  }

  ngOnInit() {
  }
  goTocarrito() {
    this.router.navigate(['/carrito'])

  }
  goTocamaperro(){
    this.router.navigate(['/camaperro'])
    
  }

  goTocasaperro(){
    this.router.navigate(['/casaperro'])
    
  }

  goTocomederoperro(){
    this.router.navigate(['/comederoperro'])
    
  }

  goTojugueteperro(){
    this.router.navigate(['/jugueteperro'])
    
  }

}
