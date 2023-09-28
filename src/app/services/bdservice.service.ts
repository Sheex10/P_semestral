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
    tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(id_producto INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(30) NOT NULL, descripcion VARCHAR(300) NOT NULL, precio INTEGER NOT NULL, categoria FOREIGN KEY);";

    tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuario(id INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL, apellido VARCHAR(20) NOT NULL, correo VARHCAR (50) NOT NULL, clave VARCHAR (12) NOT NULL, rol FOREIGN KEY);";

    tablaCategoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria PRIMARY KEY autoincrement, nombre VARCHAR (20));";

    tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol PRIMARY KEY autoincrement, nombre VARCHAR (20));";

    tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle(id_detalle PRIMARY KEY autoincrement, total INTEGER NOT NULL, usuario INTEGER, FOREIGN KEY(usuario) REFERENCES tablaUsuario(id), producto FOREIGN KEY);";
    
    //LO DEL EJEMPLO DEL PROFE!!!!
    //variables para los insert iniciales
    registroNoticia: string = "INSERT or IGNORE INTO noticia(id,titulo,texto,usuario) VALUES (1,'Soy un titulo','Soy un texto largo de esta noticia', 1);";
  
    //observables de las tablas
    listaNoticias = new BehaviorSubject([]);
  
    //observable para la BD
    private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor() { }
}
