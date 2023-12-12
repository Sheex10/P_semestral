import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-camaperro',
  templateUrl: './camaperro.page.html',
  styleUrls: ['./camaperro.page.scss'],
})
export class CamaperroPage implements OnInit {

  infoProducto: any = [];
  infoUsuario: any = [];
  usu: any;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private bd: BdserviceService, private toastController: ToastController) {
    this.activatedRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras.state) {
        this.infoProducto = this.router.getCurrentNavigation()?.extras.state?.["name"];
        this.infoUsuario = this.router.getCurrentNavigation()?.extras.state?.["name"];
      }
    })
  }

  ngOnInit() {
    this.bd.bdState().subscribe(res => {
      if (res) {
        this.bd.fetchusu().subscribe(datos => {
          this.usu = datos
        })
      }
    })
  }
  goTocarrito() {
    this.router.navigate(['/juguetegato'])

  }
  goToPerfil() {
    this.router.navigate(['/cuenta'])

  }

  async mostrarToast(mensaje: string) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: 1000,
      position: 'top'
    });
    await toast.present();
  }

  AnadirAlCarrito() {
    for (var p = 0; p < this.usu.length; p++) {
      if (this.usu[p].idUsu == 1) {
        this.bd.insertarCarrito(this.infoProducto.id, this.usu[p].usuarioc)
        this.mostrarToast("Producto agregado!");
      }
    }

  }
}
