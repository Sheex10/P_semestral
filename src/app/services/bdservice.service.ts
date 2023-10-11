import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdserviceService {

    //variable de conexion a BD
    public database!: SQLiteObject;

    //variables para la creacion de tablas
    tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(id_producto INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(30) NOT NULL, descripcion VARCHAR(300) NOT NULL, precio INTEGER NOT NULL, categoria INTEGER, FOREIGN KEY(categoria) REFERENCES tablaCategoria(id_categoria));";

    tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL, apellido VARCHAR(20) NOT NULL, correo VARHCAR (50) NOT NULL, clave VARCHAR (12) NOT NULL, rol INTEGER, FOREIGN KEY(rol) REFERENCES tablaRol(id_rol));";

    tablaCategoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria PRIMARY KEY autoincrement, nombre VARCHAR (20));";

    tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol PRIMARY KEY autoincrement, nombre VARCHAR (20));";

    tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle(id_detalle PRIMARY KEY autoincrement, total INTEGER NOT NULL, usuario INTEGER, FOREIGN KEY(usuario) REFERENCES tablaUsuario(id));";
    

    //variables para los insert iniciales
    registrarProducto: string = "INSERT or IGNORE INTO tablaProducto(id_producto,nombre,descripcion,precio,categoria) VALUES (1,'Cama Perro','Linda cama cómoda para tu mascota',5990,perro);";
    //observables de las tablas
    listaProductos = new BehaviorSubject([]);
  
    //observable para la BD
    private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private alertController: AlertController, public sqlite: SQLite, private platform: Platform) { 
    this.crearBD();
  }

  async presentAlert(msj:string){
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }




  crearBD(){
    this.platform.ready().then(()=>{
      //creación de la base de datos
      this.sqlite.create({
        name: 'bdProyecto',
        location: 'default'
      }).then((db:SQLiteObject)=>{
        //capturar la conexión a la BD
        this.database = db;
        //comando que ejecuta la creación de tablas
        //this.crearTablas();
      }).catch(e =>{
        this.presentAlert("Error en crear la Base de datos: " + e);
      })
    })
  }
}
