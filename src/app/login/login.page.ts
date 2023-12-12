import { Component, OnInit } from '@angular/core';
import { NavigationExtras} from '@angular/router';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ToastController } from '@ionic/angular';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  //correoUsuario: string = "patoreyes@gmail.com";
  //claveUer: string = "1234567";
  //correoAdmin: string = "pipeshee@gmail.com";
  //claveAdmin: string = "123456789";
  
  formularioL: FormGroup;
  usuarioOnline: boolean=false;

  id: number =0;

  mailUsuario: string = "";
  claveUsuario: string = "";

  arrayUsuarios: any = [
    {
      id: 0,
      nombreUser: "",
      apellido: "",
      correo: "",
      clave: "",
      imagen: "",
      idRol: 0,
    }
  ]

  constructor(private bd: BdserviceService, private router: Router, private alertController: AlertController, public fb: FormBuilder) {

    this.formularioL = this.fb.group({
      'Correo1': new FormControl('', [Validators.required]),
      'Contrasena1': new FormControl('', [Validators.required])
    })
  }

  get correo() {
    return this.formularioL.get('Correo1') as FormControl;

  }

  get contra() {
    return this.formularioL.get('Contrasena1') as FormControl;

  }



  ngOnInit() {
    this.bd.bdState().subscribe(res => {
      if (res) {
        this.bd.fetchusuario().subscribe(datos => {
          this.arrayUsuarios = datos
        })
      }
    })
  }

  //Validación
  validaLogin(){
    this.usuarioOnline=false;
    for(var i = 0; i<this.arrayUsuarios.length; i++){
      if(this.mailUsuario==this.arrayUsuarios[i].correo){

        if(this.claveUsuario==this.arrayUsuarios[i].clave){

          if(this.arrayUsuarios[i].id_rol==1){
            this.id=this.arrayUsuarios[i].id
             this.bd.insertarUsu(this.id);
            let NavigationExtra:NavigationExtras={
              state:{
                infoUsuario:this.arrayUsuarios[i]
              }
            }
            this.usuarioOnline =true;
            this.router.navigate(["/cuenta"],NavigationExtra)
            }
            if(this.arrayUsuarios[i].id_rol==2){
              this.router.navigate(['/menuadmin'])
              this.usuarioOnline=true;
            }
        }else{
          this.presentAlert("Contraseña Incorrecta");
        }
      }
    }if(this.usuarioOnline == false){
      this.presentAlert("Correo no registrado!");
    }
  }

  async presentAlert( msj:string){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msj,
      buttons: ['OK']
    });
    await alert.present();
  }

  goToRegister() {
    this.router.navigate(['/registro'])
  }

}

