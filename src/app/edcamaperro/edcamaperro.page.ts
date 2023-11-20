import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BdserviceService } from '../services/bdservice.service';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';



@Component({
  selector: 'app-edcamaperro',
  templateUrl: './edcamaperro.page.html',
  styleUrls: ['./edcamaperro.page.scss'],
})
export class EdcamaperroPage implements OnInit {

  producto:any;
  categorias:any=[];
  categoriaId:any
  fotoN:any
  constructor(private router: Router,private activatedRouter:ActivatedRoute,private bd:BdserviceService) { 
    this.activatedRouter.queryParams.subscribe(param =>{
      if(this.router.getCurrentNavigation()?.extras.state){
        this.producto= this.router.getCurrentNavigation()?.extras.state?.["producto"];
        this.fotoN = this.producto.img
      }
    })
  }

  ngOnInit() {
    this.bd.bdState().subscribe(res=>{
      if(res){
        this.bd.fetchcategoria().subscribe(datos=>{
          this.categorias = datos;

        })
      }
    })
  }

  modificar(){
    this.producto.img = this.fotoN
    this.bd.modificarProducto(this.producto.id,this.producto.nombre_producto,this.producto.descripcion,
      this.producto.precio,this.producto.categoria,this.producto.img)
     this.router.navigate(['/editarpd'])
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
  
  
  goToeditarpd(){
    this.router.navigate(['/editarpd'])
    
  }
  goToproductoed() {
    this.router.navigate(['/productoed'])

  }
}
