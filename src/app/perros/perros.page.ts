import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-perros',
  templateUrl: './perros.page.html',
  styleUrls: ['./perros.page.scss'],
})
export class PerrosPage implements OnInit {
  onModalCancel(onModalCancel: any) {
    throw new Error('Method not implemented.');
  }

  listadoPerros: any = [];

  constructor(private router: Router, private bd: BdserviceService, private activatedRouter:ActivatedRoute) { 
    
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
  goTocamaperro(x:any){
    let navigationExtras : NavigationExtras = {
      state: {
        name : x
      }
    }
    this.router.navigate(['/camaperro'], navigationExtras)
    
  }
  goTocarrito() {
    this.router.navigate(['/juguetegato'])

  }
}
