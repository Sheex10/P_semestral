import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-juguetegato',
  templateUrl: './juguetegato.page.html',
  styleUrls: ['./juguetegato.page.scss'],
})
export class JuguetegatoPage implements OnInit {

  listadoCarrito: any ;
  listadoProducto: any ;

  constructor(private router: Router, private bd: BdserviceService) { }

  ngOnInit() {
    this.bd.bdState().subscribe(res => {
      if (res) {
        this.bd.fetchcarrito().subscribe(datos => {
          this.listadoCarrito = datos;
        })
      }
    })
    this.bd.bdState().subscribe(res => {
      if (res) {
        this.bd.fetchproducto().subscribe(datos => {
          this.listadoProducto = datos;
        })
      }
    })
  }
  goTocarrito() {

  }
}
