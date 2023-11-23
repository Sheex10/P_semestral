import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-perros',
  templateUrl: './perros.page.html',
  styleUrls: ['./perros.page.scss'],
})
export class PerrosPage implements OnInit {

  listadoPerros: any = [];

  constructor(private router: Router, private bd: BdserviceService) { 
    
  }

  ngOnInit() {
    this.bd.bdState().subscribe(res => {
      if (res) {
        this.bd.fetchproducto().subscribe(datos => {
          this.listadoPerros = datos;
        })
      }
    })
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
