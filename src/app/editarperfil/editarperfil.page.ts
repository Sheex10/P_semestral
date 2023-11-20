import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BdserviceService } from '../services/bdservice.service';

@Component({
  selector: 'app-editarperfil',
  templateUrl: './editarperfil.page.html',
  styleUrls: ['./editarperfil.page.scss'],
})
export class EditarperfilPage implements OnInit {

  usuario:any;
  image:any;
  constructor(private router:Router,private activatedRouter:ActivatedRoute,private bd:BdserviceService) { 
    this.activatedRouter.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario= this.router.getCurrentNavigation()?.extras.state?.["usuario"];
        this.image = this.usuario.imagen
      }
    })
  }

  ngOnInit() {
  }
  goTocuenta(){
    this.usuario.imagen = this.image
    console.log(this.usuario)
    this.bd.actualizaPerfilUsuario(this.usuario.id,this.usuario.nombre,this.usuario.apellido,this.image)
    let navigationExtras:NavigationExtras = {
      state:{
        infoUsuario:this.usuario
      }
    }
   this.router.navigate(['/cuenta'],navigationExtras)
  }

  takePicture = async () => {
    const image2 = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Prompt
    });
  
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    //var imageUrl = image.webPath;
  this.image = image2.dataUrl;
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
  };
}
