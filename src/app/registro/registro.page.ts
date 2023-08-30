import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  nombre: string = "";
  fechaNac!: Date;
  correo: string = "";
  NomMsj: string = ""; 
  FechMsj: string = "";
  CorrMsj: string = "";

  NomColor: string = "warning";
  CorrColor: string = "warning";
  FechColor: string = "warning";

  flag: string = "false";
  constructor(public alertController: AlertController, private router:Router) { }

  ngOnInit() {
  }

  async presentAlert(mensaje:string){
    const alert = await this.alertController.create({
      header: "Aviso",
      subHeader: 'Seguridad de la contraseña',
      message: mensaje,
      buttons: ['Continuar'],
    });
    await alert.present();
  }
  volver(){
    this.flag="false";
  }

  verificarRegistro(name:string,fecha:Date,correo:string){
    this.NomMsj = ""; this.FechMsj="";
    this.CorrMsj = ""; this.CorrColor="warning";
    this.FechColor="warning"; this.NomColor="warning";

    var flag= true;

    /*if (this.numerosName(name)){
      this.NomMsj = "El nombre no debe contener números";
      flag = true;
      this.NomColor="danger";
    }*/
  }
}
