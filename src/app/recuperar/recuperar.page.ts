import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.page.html',
  styleUrls: ['./recuperar.page.scss'],
})
export class RecuperarPage implements OnInit {

  formularioOlvidaste:FormGroup;


  arregloPreguntas:any =[{
    idP: 0,
    nombreP: '' 
  }]
  arreglousuario:any =[{
    idU: 0,
    nombreU: '' ,
    correo:'',
    contrasena:'',
    idPregunta:0,
    respuesta:''
  }]

  x:string="false";
  idUsuario:number=0;
  RespuestaG:any=[]
  pedirCorreo="";
  pedirPregunta:any={idP:0};
  pedirRespuesta:string="";

  constructor(public fb:FormBuilder, public alertController:AlertController,private bd:BdserviceService,private router:Router,private activatedRouter:ActivatedRoute) {

    this.formularioOlvidaste=this.fb.group({
      'Correo': new FormControl("",[Validators.required,Validators.minLength(5),Validators.email]),
    })
   }

   get correo(){
    return this.formularioOlvidaste.get('Correo') as FormControl;
   }



  ngOnInit() {
    /*this.bd.bdstate().subscribe(res=>{
      if(res){
        this.bd.fetchPregunta().subscribe(datos=>{
          this.arregloPreguntas=datos;
        })
      }
    })
    this.bd.bdstate().subscribe(res=>{
      if(res){
        this.bd.fetchUsuario().subscribe(datos=>{
          this.arreglousuario=datos;
        })
      }
    })*/
  }

  correoU(){
    for(var i=0;i<this.arreglousuario.length;i++){
      if(this.pedirCorreo == this.arreglousuario[i].correo){
        this.RespuestaG.push({
          idPregunta:this.arreglousuario[i].idPregunta,
          respuesta:this.arreglousuario[i].respuesta,
          idUsuario:this.arreglousuario[i].idU
        })
      }
  }
  if(this.RespuestaG.length == 0){
    this.presentAlert("Usuario no registrado");
  }}

  CambiarContra(){
    var x = true;
    if(x){
      this.correoU();
      //this.presentAlert("pregunta" +String(this.pedirPregunta.idP)+"fore"+String(this.RespuestaG[0].idPregunta));
      if (this.pedirPregunta.idP == this.RespuestaG[0].idPregunta){
        if(this.pedirRespuesta.toLocaleLowerCase() == this.RespuestaG[0].respuesta.toLocaleLowerCase()){
          this.idUsuario = this.RespuestaG[0].idUsuario;
          this.x = 'true';
          let navigationextra:NavigationExtras={
            state:{
              RespuestaG:this.RespuestaG[0]
            }
          }
          this.presentAlert("Usuario Correcto");
          this.router.navigate(['/modificar-contra'],navigationextra)
          
        }else{
          this.presentAlert("Respuesta incorrecta");
        }
      }else{
        this.presentAlert("Pregunta incorrecta");
      }
    }
    this.RespuestaG = [];
  }
  
  async presentAlert( msj:string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }

}
