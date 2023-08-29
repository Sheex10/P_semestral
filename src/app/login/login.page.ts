import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
FormControl,
Validators,
FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { ToastController } from '@ionic/angular';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})

export class LoginPage implements OnInit {

  correoUsuario:string="patoreyes@gmail.com";
  claveUsuario:string="1234567";

  correoAdmin:string="pipeshee@gmail.com";
  claveAdmin:string="123456789";

  correoIngresado:string="";
  claveIngresado:string="";

  constructor(private router:Router, private toastController: ToastController) { 
    
  

  }
  
  ngOnInit() {
  }
  verificarLogin(correo:string,clave:string){
    if(this.correoUsuario == correo){
      if (this.claveUsuario == clave){
        this.router.navigate(['/perfil-user']);
      }
      else{
        //this.presentToast('bottom','Contraseña Incorrecta',2000);
        console.log('xddddd')
      }
    }
  }

  }

