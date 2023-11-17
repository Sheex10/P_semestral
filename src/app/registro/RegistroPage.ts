import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BdserviceService } from '../services/bdservice.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  arrayPreguntas: any = [{
    idP: 0,
    nombreP: ''
  }];

  arrayUsuario: any = [{
    idU: 0,
    nombreU: '',
    correo: '',
    contrasena: '',
    foto: '',
    idPregunta: 0,
    idRol: 0,
    respuesta: ''
  }];

  newImg: any = "";

  pideNombre = "";
  pideApellido = "";
  pideCorreo = "";
  pidePregunta: any;
  pideRespuesta = "";
  pideContrasena = "";
  pideRol = 1;
  infoUsuario: any;
  correoU = "";
  prueba = true;

  contra1: string = "";
  contra2: string = "";
  mensaje: string = "Las contraseñas no coinciden";

  formularioReg: FormGroup;

  constructor(public alertController: AlertController, private router: Router, public fb: FormBuilder, private activatedRouter: ActivatedRoute, private bd: BdserviceService) {
    this.activatedRouter.queryParams.subscribe(param => {
      if (this.router.getCurrentNavigation()?.extras?.state) {
        this.infoUsuario = this.router.getCurrentNavigation()?.extras?.state?.["infoUsuario"];
        this.correoU = this.infoUsuario.correo;
      }
    });

    this.formularioReg = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'contraseña': new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(new RegExp("(?=.*[0-9])")), Validators.pattern(new RegExp("(?=.*[A-Z])")), Validators.pattern(new RegExp("(?=.*[a-z])"))]),
      'Confirmar_contraseña': new FormControl("", [Validators.required]),
      'Correo': new FormControl("", [Validators.required, Validators.minLength(5), Validators.email]),
    });
  }

  registrar() {
    this.prueba = true;
    if (this.correoU != this.pideCorreo) {
      for (let i = 0; i < this.arrayUsuario.length; i++) {
        if (this.pideCorreo == this.arrayUsuario[i].correo) {
          this.prueba = false;
          this.presentAlert("Correo ya existente");
        }
      }
    }
    if (this.prueba) {
      if (this.contra1 == this.contra2) {
        this.bd.insertarUsuario(this.pideRespuesta, this.pideNombre, this.pideApellido, this.pideCorreo, this.pideContrasena, this.newImg, this.pideRol, this.pidePregunta);
        this.presentAlert("Usuario agregado");
        this.router.navigate(["/login"]);
      } else {
        this.presentAlert("No hay coincidencias en las claves");
      }
    }
  }


  ngOnInit() {
    this.bd.bdState().subscribe(res =>{
      if(res){
        this.bd.fetchpregunta().subscribe(datos=>{
          this.arrayPreguntas=datos;
        })
      }
    })
    this.bd.bdState().subscribe(res=>{
    if(res){
      this.bd.fetchusuario().subscribe(datos=>{
        this.arrayUsuario=datos;
      })
    }
  })
  }

  takePicture = async () => {
    const image2 = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Photos
    });
    this.newImg= image2.dataUrl;
  };

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
    this.router.navigate(['/login']);

  }




}
