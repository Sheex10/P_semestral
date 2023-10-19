import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { AlertController } from '@ionic/angular/providers/alert-controller';
import { BdserviceService } from '../services/bdservice.service';


@Component({
  selector: 'app-editarperfil2',
  templateUrl: './editarperfil2.page.html',
  styleUrls: ['./editarperfil2.page.scss'],
})
export class Editarperfil2Page implements OnInit {

  formularioModificar:FormGroup;
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

  pedirCorreo="";
  pedirUsuario="";
  pedirDesc="";

  idUsuario:any;

  infoUsuario:any;

  prueba=true;

  apellido="";
  correoU="";
  nombre="";
  descripcion="";
  fotoN:any;
  
  //perfilUsuario=new EventEmitter<any>();

  constructor(public fb:FormBuilder,private router:Router, private activatedRouter:ActivatedRoute, public alertController:AlertController,private bd:BdserviceService) {
    this.activatedRouter.queryParams.subscribe(param =>{
      if (this.router.getCurrentNavigation()?.extras.state){
        this.infoUsuario = this.router.getCurrentNavigation()?.extras?.state?.["infoUsuario"];
        this.correoU= this.infoUsuario.correo;
        this.nombre= this.infoUsuario.nombre;
        this.apellido= this.infoUsuario.apellido;
        this.descripcion= this.infoUsuario.descripcion;
        this.fotoN=this.infoUsuario.foto;
        this.idUsuario=this.infoUsuario.idU; 

        this.pedirCorreo=this.correoU;
        this.pedirUsuario=this.nombre;
        
        
      }
    })

    this.formularioModificar=this.fb.group({
      'NombreUsuario': new FormControl("",[Validators.required]),
      'ApellidoUsuario': new FormControl("",[Validators.required]),
      'Correo': new FormControl("",[Validators.required]),
    })

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

  get correo(){
    return this.formularioModificar.get('Correo') as FormControl;
   }

  get nombreU(){
    return this.formularioModificar.get('NombreUsuario') as FormControl;
   }
  
  get Descri(){
    return this.formularioModificar.get('Descripcion') as FormControl;
   }


  
   modificarP() {
    this.prueba = true;

    if(this.correoU == this.pedirCorreo){
      this.bd.actualizaPerfilUsuario(this.idUsuario,this.pedirCorreo,this.nombreU,this.fotoN);
      this.presentAlert("Usuario Modificado");
      let infoUsuario={
            id:this.idUsuario,
            correo:this.pedirCorreo,
            nombre:this.nombreU,
            foto:this.fotoN,
        }
        let navigationextra:NavigationExtras={
          state:{
            infoUsuario:infoUsuario }
        }
      this.router.navigate(['/cuenta'],navigationextra)
    }

    if (this.correoU != this.pedirCorreo) {
      for (let i = 0; i < this.arreglousuario.length; i++) {
        if (this.pedirCorreo === this.arreglousuario[i].correo) {
          this.prueba = false;
          this.presentAlert("Correo ya existente");
        }
      }
      if(this.prueba){
        this.bd.actualizaPerfilUsuario(this.idUsuario,this.pedirCorreo,this.nombreU,this.fotoN);
        this.presentAlert("Usuario Modificado");
        let infoUsuario={
          id:this.idUsuario,
          correo:this.pedirCorreo,
          nombre:this.nombreU,
          foto:this.fotoN,
          }
      let navigationextra:NavigationExtras={
        state:{
          infoUsuario:infoUsuario }
          }
        this.router.navigate(['/cuenta'],navigationextra)
      }
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
