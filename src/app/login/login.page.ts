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
  claveIngresada:string="";

  constructor(private router:Router, private toastController: ToastController) { }
  
  ngOnInit() {
  }

  async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string, duracion:number){
    const toast = await this.toastController.create({
      message: mensaje,
      duration: duracion,
      position: position,
      color: "dark"
    });
    await toast.present();
  }
  //Validación
  verificarLogin(correo:string, clave:string){
    if (this.correoUsuario == correo){
      if (this.claveUsuario == clave){
        this.router.navigate(['/home']);
      }else{
        this.presentToast('bottom',"Contraseña Incorrecta",2000);
      }
    }
    if (this.correoAdmin == correo){
      if (this.claveAdmin == clave){
        this.router.navigate(['/menuadmin']);
      }else{
        this.presentToast('bottom',"Contraseña Incorrecta",2000)
      }
    }
    if (this.correoUsuario != correo && this.correoAdmin != correo){
      this.presentToast('bottom',"Usuario no existente",2000);
    }
  }
  goToRegister(){
    this.router.navigate(['/registro'])}
}

