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

  //async presentToast(position: 'top' | 'middle' | 'bottom', mensaje:string, duracion:number){

  //}
}

