import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BdserviceService } from '../services/bdservice.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar-producto',
  templateUrl: './agregar-producto.page.html',
  styleUrls: ['./agregar-producto.page.scss'],
})
export class AgregarProductoPage implements OnInit {

  formularioReg: FormGroup;
  //
  nombreProducto:string="";
  descripcion:string = "";
  precio:number = 0
  fotoN:any;
  categoriaId:any;
  //
  categorias:any;
  constructor(public fb: FormBuilder,private bd:BdserviceService,private router:Router) { 
    this.formularioReg = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'Correo': new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {
    this.bd.fetchcategoria().subscribe(datos=>{
      this.categorias = datos
    })
 }
 guardarProducto(){
  
  this.bd.insertarProducto(this.nombreProducto,this.descripcion,this.precio,this.categoriaId,this.fotoN)
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

 get nombreU (){
  return this.formularioReg.get('nombre') as FormControl
}

get apellidoU (){
  return this.formularioReg.get('apellido') as FormControl
}



get correoUser (){
  return this.formularioReg.get('Correo') as FormControl
}


}
