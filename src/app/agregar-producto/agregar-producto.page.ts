import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { BdserviceService } from '../services/bdservice.service';

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
  constructor(public fb: FormBuilder,private bd:BdserviceService) { 
    this.formularioReg = this.fb.group({
      'nombre': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'apellido': new FormControl("", [Validators.required, Validators.minLength(3)]),
      'contrasena': new FormControl("", [Validators.required, Validators.minLength(5), Validators.maxLength(15), Validators.pattern(new RegExp("(?=.*[0-9])")), Validators.pattern(new RegExp("(?=.*[A-Z])")), Validators.pattern(new RegExp("(?=.*[a-z])"))]),
      'Confirmar_contrasena': new FormControl("", [Validators.required]),
      'Correo': new FormControl("", [Validators.required]),
    });
  }

  ngOnInit() {
    this.bd.fetchcategoria().subscribe(datos=>{
      this.categorias = datos
    })
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

get contrasenaU (){
  return this.formularioReg.get('contrasena') as FormControl
}

get correoUser (){
  return this.formularioReg.get('Correo') as FormControl
}

get confirmarU (){
  return this.formularioReg.get('Confirmar_contrasena') as FormControl
}

}
