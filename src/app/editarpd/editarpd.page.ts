import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-editarpd',
  templateUrl: './editarpd.page.html',
  styleUrls: ['./editarpd.page.scss'],
})
export class EditarpdPage implements OnInit {

  productos:any;
  constructor(private router: Router, private menuCtrl: MenuController,private bd:BdserviceService) {
    this.menuCtrl.enable(true, 'principal');
  }

  ngOnInit() {
    this.bd.bdState().subscribe(res=>{
      if(res){
      this.bd.fetchproducto().subscribe(datos=>{
        this.productos = datos;
      })
    }
   })
  }

  modificarProducto(x:any){
    let navigationExtras:NavigationExtras = {
      state:{
        producto: x
      }
    }
    this.router.navigate(['edcamaperro'],navigationExtras)
  }

  eliminarProducto(id:any){
    console.log(id)
    this.bd.eliminarProducto(id)
  }
  
}


