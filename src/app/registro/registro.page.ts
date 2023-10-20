import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  pNombre: any ;
  pApellido: any ;
  pCorreo: any ;
  pContra: any ;
  pConContra: any ;

  formularioReg: FormGroup;
  contrasena1: any;
  mensaje: any;
  contrasena2: any;
  constructor(public alertController: AlertController, private router: Router, public fb: FormBuilder, private bd: BdserviceService) {

    this.formularioReg = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'correo': new FormControl("", [Validators.required, Validators.minLength(5), Validators.email]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(8), Validators.maxLength(15)]),
      'confirmar_contrasena': new FormControl("", [Validators.required])
    })

  }

  /*register() {
    if (this.contrasena1 == this.contrasena2) {
      this.router.navigate(['/login'],)

    } else {
      let navigationextra: NavigationExtras = {
        state: {
          mensaje: this.mensaje
        }
      }
    }
  }*/

  get nomUser() {
    return this.formularioReg.get('nombre') as FormControl;
  }
  get apeUser() {
    return this.formularioReg.get('apellido') as FormControl;
  }
  get mailUser() {
    return this.formularioReg.get('correo') as FormControl;
  }
  get pwdUser() {
    return this.formularioReg.get('contrasena') as FormControl;
  }

  get conpwdUser() {
    return this.formularioReg.get('confirmar_contrasena') as FormControl;
  }


  ngOnInit() {
  }

  async presentAlert(mensaje: string) {
    const alert = await this.alertController.create({
      header: "Aviso",
      subHeader: 'Seguridad de la contraseña',
      message: mensaje,
      buttons: ['Continuar'],
    });
    await alert.present();
  }


  goTologin() {
    this.router.navigate(['/login'])

  }

  /*registrar(){
    if (this.contrasena1==this.contrasena2){
      this.bd.insertarUsuario(this.pNombre,this.pApellido, this.pCorreo, this.pContra, this.pConContra);
      this.bd.presentAlert("Usuario registrado");
      this.router.navigate(['/login'])
    }else{
      this.presentAlert("Las claves no coinciden!");
    }
  }*/

  ingresar(){
    this.presentAlert("correo "+this.pCorreo)
    if(this.pContra == this.pConContra){
      this.bd.insertarUsuario(this.pNombre, this.pApellido, this.pCorreo, this.pContra)
      this.router.navigate(['/login'])
    }else{
      this.presentAlert("Las contraseñas no coinciden entre si u.u")
    }
  }

  
}
