import { Component, OnInit } from '@angular/core';
import { NavigationExtras} from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  correoUsuario: string = "patoreyes@gmail.com";
  claveUsuario: string = "1234567";
  correoAdmin: string = "pipeshee@gmail.com";
  claveAdmin: string = "123456789";
  
  formularioL: FormGroup;

  correoIngresado: string = "";
  claveIngresada: string = "";

  usuarios: any = [
    {
      id: 0,
      nombre: "",
      apellido: "",
      correo: "",
      clave: "",
      imagen: "",
      idRol: 0
    }
  ]

  constructor(private bd: BdserviceService, private router: Router, private toastController: ToastController, public fb: FormBuilder) {

    this.formularioL = this.fb.group({

      'Correo': new FormControl('', [Validators.required, Validators.minLength(5), Validators.email,]),
      'Contraseña': new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  get correo() {
    return this.formularioL.get('Correo') as FormControl;

  }

  get contra() {
    return this.formularioL.get('Correo') as FormControl;

  }



  ngOnInit() {
    this.bd.bdState().subscribe(res => {
      if (res) {
        this.bd.fetchUsuarios().subscribe(datos => {
          this.usuarios = datos
        })
      }
    })
  }



  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje: string, duracion: number) {
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
      position: position,
      color: "dark"
    });
    await toast.present();
  }
  //Validación
  iniciar() {
    for (var i = 0; i < this.usuarios.length; i++) {
      if (this.correoIngresado == this.usuarios[i].correo) {
        if (this.claveIngresada == this.usuarios[i].clave) {
          if (this.usuarios[i].idRol == 2) {
            let navigationExtras: NavigationExtras = {
              state: {
                infoUsuario: this.usuarios[i]
              }
            }
            this.router.navigate(['/cuenta'], navigationExtras)
          }
          if (this.usuarios[i].idRol == 1) {
            let navigationExtras: NavigationExtras = {
              state: {
                infoUsuario: this.usuarios[i]
              }
            }
            this.router.navigate(['/menuadmin'], navigationExtras)
          }
        }
      }
    }
  }

  goToRegister() {
    this.router.navigate(['/registro'])
  }
  goTorecuperar() {
    this.router.navigate(['/recuperar'])
  }
}

