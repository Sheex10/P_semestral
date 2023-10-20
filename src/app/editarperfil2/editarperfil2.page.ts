import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

import { AlertController } from '@ionic/angular';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-editarperfil2',
  templateUrl: './editarperfil2.page.html',
  styleUrls: ['./editarperfil2.page.scss'],
})
export class Editarperfil2Page implements OnInit {

  //formularioModificar:FormGroup;
  imagenNueva:any;

  arreglousuario:any =[{
    id: 0,
    nombre: '' ,
    apellido:'',
    correo:'',
    clave:0,
    rol:'',
    imagen:'',
    descripcion:''
  }]

  pedirNOMBRE="";
  pedirAPELLIDO="";
  pedirDesc="";

  idUsuario:any;

  infoUsuario:any;

  prueba=true;

  apellido="";
  correoU="";
  nombre="";
  correoUSER="";
  fotoN:any;
  
  //perfilUsuario=new EventEmitter<any>();

  constructor(public fb:FormBuilder,private router:Router, private activatedRouter:ActivatedRoute, public alertController:AlertController,private bd:BdserviceService) {
    this.activatedRouter.queryParams.subscribe(param =>{
      if (this.router.getCurrentNavigation()?.extras.state){
        this.infoUsuario = this.router.getCurrentNavigation()?.extras?.state?.["infoUsuario"];
        this.correoU= this.infoUsuario.correoU;
        this.nombre= this.infoUsuario.nomUser;
        this.apellido= this.infoUsuario.apeUser;
        this.correoUSER= this.infoUsuario.clave;
        this.fotoN=this.infoUsuario.imgg;
        this.idUsuario=this.infoUsuario.id; 

        this.pedirNOMBRE=this.nombre;
        this.pedirAPELLIDO=this.apellido;
        
        
      }
    })

    /*this.formularioModificar=this.fb.group({
      'NombreUsuario': new FormControl("",[Validators.required]),
      'ApellidoUsuario': new FormControl("",[Validators.required]),
      'Correo': new FormControl("",[Validators.required]),
    })*/

  }
  ngOnInit() {
    this.bd.bdState().subscribe(res => {
      if (res) {
        this.bd.fetchUsuarios().subscribe(datos => {
          this.arreglousuario = datos;
        })
      }
    });
  }
  /*perfil(){
    this.perfilUsuario.emit(["false"]);
  }*/

  /*get correo(){
    return this.formularioModificar.get('Correo') as FormControl;
   }

  get nombreU(){
    return this.formularioModificar.get('NombreUsuario') as FormControl;
   }
  
  get Apellido(){
    return this.formularioModificar.get('ApellidoUsuario') as FormControl;
   }*/


  
   modificarP() {
    this.prueba = true;
      if(this.prueba){
        this.bd.actualizaPerfilUsuario(this.idUsuario,this.pedirNOMBRE,this.pedirAPELLIDO,this.fotoN);
        this.presentAlert("Usuario Modificado");
        let infoUsuario={
          id:this.idUsuario,
          nombre:this.pedirNOMBRE,
          apellido:this.pedirAPELLIDO,
          foto:this.fotoN,
          }
      let navigationextra:NavigationExtras={
        state:{
          infoUsuario:infoUsuario }
          }
        this.router.navigate(['/cuenta'],navigationextra)
      }
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

  takePicture = async () => {
    const image2 = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source:CameraSource.Photos
    });
    this.fotoN= image2.dataUrl;
  };

  goTomenuadmin(){
    this.router.navigate(['/menuadmin'])
    
  }
}
