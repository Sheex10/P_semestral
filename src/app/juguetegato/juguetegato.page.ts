import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-juguetegato',
  templateUrl: './juguetegato.page.html',
  styleUrls: ['./juguetegato.page.scss'],
})
export class JuguetegatoPage implements OnInit {

  subtotal : number = 0;
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
    this.calculartotal();
  }
  
  EliminarPd(x:any) {
    this.bd.eliminarCarrito(x.idCarrito);
  }

  calculartotal(){
    for(var p = 0; p<this.listadoProducto.length; p++){
      for(var x = 0; x<this.listadoCarrito.length; x++){
        if (this.listadoProducto[p].id==this.listadoCarrito[x].idProducto){
          this.subtotal+=this.listadoProducto[p].precio
        }
      }
    }
  }
}
