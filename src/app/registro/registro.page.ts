import { Component, OnInit } from '@angular/core';
import{
  FormGroup,
FormControl,
Validators,
FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage implements OnInit {

  formularioR:FormGroup;
  constructor(public alertController: AlertController, private router:Router, public fb:FormBuilder) { 
    this.formularioR=this.fb.group({
      'Correo': new FormControl('',[Validators.required,Validators.minLength(5), Validators.email]),
      'Contraseña': new FormControl('',[Validators.required,Validators.minLength(5)]),
      'ConfirmarPwd': new FormControl('',Validators.compose([
        Validators.maxLength(25),
        Validators.minLength(5),
        Validators.pattern('^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]+$'),
        Validators.required
      ]))
    })
  }

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


  goTologin(){
    this.router.navigate(['/login'])
    
  }
}
