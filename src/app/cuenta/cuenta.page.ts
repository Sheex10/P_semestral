import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';


@Component({
  selector: 'app-cuenta',
  templateUrl: './cuenta.page.html',
  styleUrls: ['./cuenta.page.scss'],
})
export class CuentaPage implements OnInit {

  image: any;
  usuario:any
  constructor(private router: Router,private activatedRouter:ActivatedRoute) { 
    this.activatedRouter.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.usuario= this.router.getCurrentNavigation()?.extras.state?.["infoUsuario"];
      }
    })
  }

  ngOnInit() {
  }
  goToeditarperfil() {
    this.router.navigate(['/editarperfil'])

  }
  goToeditarpd() {
    this.router.navigate(['/editarpd'])

  }

  takePicture = async () => {
    const image2 = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
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


