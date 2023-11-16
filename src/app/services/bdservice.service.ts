import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Producto } from './producto';
import { Rol } from './rol';
import { Usuario } from './usuario';
import { Categoria } from './categoria';
import { Detalle } from './detalle';
import { Pregunta } from './pregunta';


@Injectable({
  providedIn: 'root'
})
export class BdserviceService {

  //variable de conexion a BD
  public database!: SQLiteObject;

  //variables para la creacion de tablas
  tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(id_producto INTEGER PRIMARY KEY autoincrement, nombre_producto VARCHAR(30) NOT NULL, descripcion VARCHAR(300) NOT NULL, precio INTEGER NOT NULL, categoria INTEGER, img BLOB, FOREIGN KEY(categoria) REFERENCES tablaCategoria(id_categoria));";

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuarios(id INTEGER PRIMARY KEY autoincrement, respuesta VARCHAR(50) NOT NULL, nombre VARCHAR(20) NOT NULL, apellido VARCHAR(20) NOT NULL, correo VARCHAR (50) NOT NULL, clave VARCHAR (12) NOT NULL, rol INTEGER, imagen BLOB, idRol INTEGER, idP INTEGER, FOREIGN KEY(idP) REFERENCES tablaPregunta(idP), FOREIGN KEY(idRol) REFERENCES tablaRol(id_rol));";

  tablaCategoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria PRIMARY KEY autoincrement, nombre_categoria VARCHAR (20));";

  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol PRIMARY KEY autoincrement, nombre_rol VARCHAR (20));";

  tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle(id_detalle PRIMARY KEY autoincrement, total INTEGER NOT NULL, usuario INTEGER, FOREIGN KEY(usuario) REFERENCES tablaUsuario(id));";

  tablaPregunta: string = "CREATE TABLE IF NOT EXISTS pregunta(idP INTEGER PRIMARY KEY AUTOINCREMENT, nombrePregunta VARCHAR(30) NOT NULL);";



  //variables para los insert iniciales
  registroUsuario: string = "INSERT or IGNORE INTO tablaUsuario(id, nombre, apellido, correo, clave, rol,imagen) values (1,'Felipe','Shee','felipe@gmail.com','123456789',1,'');";
  registroUsuarioDos: string = "INSERT or IGNORE INTO tablaUsuario(id, nombre, apellido, correo, clave, rol,imagen) values (1,'Patricio','Reyes','patricio@gmail.com','123456789',2,'');";

  registroCategoria: string = "INSERT or IGNORE INTO tablaCategoria(id_categoria, nombre_categoria) values (1,'perros');";
  registroCategoriaDos: string = "INSERT or IGNORE INTO tablaCategoria(id_categoria, nombre_categoria) values (2,'gatos');";

  registrarProducto: string = "INSERT or IGNORE INTO tablaProducto(id_producto,nombre_producto,descripcion,precio,categoria) VALUES (1,'Cama Perro','Linda cama cómoda para tu mascota',5990,1);";
  registrarProductoDos: string = "INSERT or IGNORE INTO tablaProducto(id_producto,nombre_producto,descripcion,precio,categoria) VALUES (1,'Cama gato','Linda cama para tu gato',4990,2);";

  registroRol: string = "INSERT or IGNORE INTO tablaRol(id_rol, nombre_rol) VALUES (1,'Administrador');";
  registroRolDos: string = "INSERT or IGNORE INTO tablaRol(id_rol, nombre_rol) VALUES (2,'Usuario');";

  registroDetalle: string = "INSERT or IGNORE INTO tablaDetalle(id_detalle, total, usuario) values (21,12990,2);";

  registroPregunta: string = "INSERT or IGNORE INTO pregunta(idP, nombrePregunta) VALUES(1, '¿cual es tu comida favorita?');";
  registroPregunta2: string = "INSERT or IGNORE INTO pregunta(idP, nombrePregunta) VALUES(2, '¿cual es tu color favorito?');";
  registroPregunta3: string = "INSERT or IGNORE INTO pregunta(idP, nombrePregunta) VALUES(3, '¿nombre de tu mascota?');";

  //No se si esta bien este insert!
  //observables de las tablas
  listaProductos = new BehaviorSubject([]);
  listaUsuarios = new BehaviorSubject([]);
  listaRol = new BehaviorSubject([]);
  listaCategoria = new BehaviorSubject([]);
  listaDetalle = new BehaviorSubject([]);
  listaPregunta = new BehaviorSubject([]);


  //observable para la BD
  private isDBReady: BehaviorSubject<boolean> = new BehaviorSubject(false);

  constructor(private activatedRoute: ActivatedRoute, private alertController: AlertController, public sqlite: SQLite, public toastController: ToastController, private platform: Platform) {
    this.crearBD();
  }


  //Fetchs 
  //----------------------
  bdState() {
    return this.isDBReady.asObservable();
  }
//-------------------------------
  fetchrol(): Observable<Rol[]> {
    return this.listaRol.asObservable();
  }

  fetchproducto(): Observable<Producto[]> {
    return this.listaProductos.asObservable();
  }

  fetchusuario(): Observable<Usuario[]> {
    return this.listaUsuarios.asObservable();
  }

  fetchcategoria(): Observable<Categoria[]> {
    return this.listaCategoria.asObservable();
  }

  fetchdetalle(): Observable<Detalle[]> {
    return this.listaDetalle.asObservable();
  }

  fetchpregunta(): Observable<Pregunta[]> {
    return this.listaPregunta.asObservable();
  }

  //Rol
  buscarRol() {
    return this.database.executeSql('SELECT * FROM rol', []).then(res => {
      //variable para lmacenar el resultado
      let items: Rol[] = [];
      //verifico la cantidad de registros
      if (res.rows.length > 0) {
        //agrego registro a registro em mi variable
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_rol: res.rows.item(i).id_rol,
            nombre_rol: res.rows.item(i).nombre_rol

          })
        }
      }
      this.listaRol.next(items as any);

    })
  }

  insertarRol(nombre_rol: any) {
    return this.database.executeSql('INSERT INTO rol(nombre_rol) VALUES(?)', [nombre_rol]).then(res => {
      this.buscarRol();
    })
  }

  actualizarRol(id_rol: any, nombre_rol: any) {
    return this.database.executeSql('UPDATE rol SET nombre_rol=? WHERE id_rol=?', [nombre_rol, id_rol]).then(res => {
      this.buscarRol();
    })
  }

  eliminarRol(id_rol: any) {
    return this.database.executeSql('DELETE FROM rol WHERE id_rol = ?', [id_rol]).then(res => {
      this.buscarRol();
    })
  }
  //Fin rol

  //Pregunta
  buscarPregunta() {
    return this.database.executeSql('SELECT * FROM pregunta', []).then(res => {
      //variable para lmacenar el resultado
      let items: Pregunta[] = [];
      //verifico la cantidad de registros
      if (res.rows.length > 0) {
        //agrego registro a registro em mi variable
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            idP: res.rows.item(i).idP,
            nombrePregunta: res.rows.item(i).nombrePregunta
          })
        }
      }
      this.listaPregunta.next(items as any);
    })
  }

  insertarPregunta(nombrePregunta: any) {
    return this.database.executeSql('INSERT INTO pregunta(nombrePregunta) VALUES(?)', [nombrePregunta]).then(res => {
      this.buscarPregunta();
    })
  }

  actualizarPregunta(idP: any, nombrePregunta: any) {
    return this.database.executeSql('UPDATE pregunta SET nombrePregunta=? WHERE idP=?', [nombrePregunta, idP]).then(res => {
      this.buscarPregunta();
    })
  }

  eliminarPregunta(idP: any) {
    return this.database.executeSql('DELETE FROM pregunta WHERE idP = ?', [idP]).then(res => {
      this.buscarPregunta();
    })
  }
  //Fin pregunta

  //Usuario
  buscarUsuario(){
    return this.database.executeSql('SELECT * FROM usuarios', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            respuesta: res.rows.item(i).respuesta,
            nombre: res.rows.item(i).nombre,
            correo: res.rows.item(i).correo,
            apellido: res.rows.item(i).apellido,
            imagen: res.rows.item(i).imagen,
            id_rol: res.rows.item(i).id_rol,
            idP: res.rows.item(i).idP
          })
        }
      }
      this.listaUsuarios.next(items as any);
    })
  }

  insertarUsuario(respuesta: any, nombre: any, clave: any, correo: any, descripcion: any, foto: any, id_rol: any, idP: any) {
    return this.database.executeSql('INSERT INTO usuarios(respuesta, nombre, clave, correo, descripcion, foto, id_rol,idP ) VALUES(?,?,?,?,?,?,?,?,?)', [respuesta, nombre, clave, correo, descripcion, foto, id_rol, idP]).then(res => {
      this.buscarUsuario();
    }).catch(e => {
      this.presentAlert("Error en insertar usuario");
    })
  }

  actualizarUsuario(id: any, respuesta: any, nombre: any, clave: any, correo: any, descripcion: any, foto: any, id_rol: any, idP: any) {
    return this.database.executeSql('UPDATE usuarios SET respuesta= ?, nombre= ?, clave= ?, correo= ?, descripcion= ?, foto= ?, id_rol= ?, idP= ? WHERE id= ?', [respuesta, nombre, clave, correo, descripcion, foto, id_rol, idP, id]).then(res => {
      this.buscarUsuario();
    })
  }

  actualizaPerfilUsuario(id: any, correo: any, nombre: any, descripcion: any, foto: any) {
    return this.database.executeSql('UPDATE usuarios SET correo=?, nombre= ?, descripcion= ?, foto= ? WHERE id= ?', [correo, nombre, descripcion, foto, id])
      .then(res => {
        this.buscarUsuario();
      }).catch(e => {
        this.presentAlert("Error Modificar Usuario " + e)
      })
  }

  actualizarclaveUsuario(id: any, clave: any) {
    return this.database.executeSql('UPDATE usuarios SET clave= ? WHERE id= ?', [clave, id])
      .then(res => {
        this.buscarUsuario();
      }).catch(e => {
        this.presentAlert("Error Modificar Clave: " + e)
      })
  }

  actualizarRolUsuario(id: any, id_rol: any) {
    return this.database.executeSql('UPDATE usuarios SET id_rol= ? WHERE id= ?', [id_rol, id])
      .then(res => {
        this.buscarUsuario();
      }).catch(e => {
        this.presentAlert("Error Modificar Rol: " + e)
      })
  }

  eliminarUsuario(id: any) {
    return this.database.executeSql('DELETE FROM usuarios WHERE id = ?', [id]).then(res => {
      this.buscarUsuario();
    })
  }
  //Fin Usuario

  //CREAR LA BASE DE DATOS
  crearBD() {
    this.platform.ready().then(() => {
      this.sqlite.create({
        name: 'proyect.db',
        location: 'default'
      }).then((db: SQLiteObject) => {
        this.database = db;
        //crear tablas

        this.crearTablaCategoria();
        this.crearTablaDetalle();
        this.crearTablaPregunta();
        this.crearTablaProducto();
        this.crearTablaRol();
        this.crearTablaUsuario();
      }).catch((e) => this.presentAlert("Error en crear BD: " + e));
    })
  }
//FIN BASE DE DATOS


  cargarUsuarios() {
    return this.database.executeSql('SELECT * FROM usuarios', [])
      .then(res => {
        let items: any = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id: res.rows.item(i).id,
              nombre: res.rows.item(i).nombre,
              apellido: res.rows.item(i).apellido,
              correo: res.rows.item(i).correo,
              clave: res.rows.item(i).clave,
              imagen: res.rows.item(i).imagen,
              id_rol: res.rows.item(i).id_rol
            });
          }
        }
        this.listaUsuarios.next(items as any);
      }).catch(e => {
        this.presentAlert("error: " + e)
      })
  }

  cargarProducto() {
    return this.database.executeSql('SELECT * FROM producto', [])
      .then(res => {
        let items: any = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id: res.rows.item(i).id_producto,
              nombre: res.rows.item(i).nombre_producto,
              descripcion: res.rows.item(i).descripcion,
              precio: res.rows.item(i).precio,
              categoria: res.rows.item(i).categoria,
              img: res.rows.item(i).img
            });
          }
        }
        this.listaProductos.next(items as any);
      }).catch(e => {
        this.presentAlert("error al cargar producto " + e)
      })
  }

  eliminarProducto(id: any) {
    return this.database.executeSql('DELETE FROM producto WHERE ID=?', [id])
      .then(res => {
        this.cargarProducto();
      })
  }

  fetchProducto(): Observable<Producto[]> {
    return this.listaProductos.asObservable();
  }
  buscarProducto() {
    return this.database.executeSql('SELECT * FROM producto', []).then(res => {
      //variable para almacenar el resultado
      let items: Producto[] = [];
      //verfico la cantidad de registros
      if (res.rows.length > 0) {
        //agrego registro a registro en mi variable
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_producto: res.rows.item(i).id_producto,
            nombre_producto: res.rows.item(i).nombre_producto,
            descripcion: res.rows.item(i).descripcion,
            precio: res.rows.item(i).precio,
            categoria: res.rows.item(i).categoria,
            img: res.rows.item(i).img
          })
        }
      }
      //actualizo el observable
      this.listaProductos.next(items as any);

    })
  }

  buscarCategoria(){
    return this.database.executeSql('SELECT * FROM categoria', []).then(res=>{
      let items: Categoria[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_categoria: res.rows.item(i).id_categoria,
            nombre_categoria: res.rows.item(i).nombre_categoria
          })
        }
      }
      this.listaCategoria.next(items as any);
    })
  }

  buscarDetalle(){
    return this.database.executeSql('SELECT * FROM detalle', []).then(res=>{
      let items: Detalle[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_detalle: res.rows.item(i).id_detalle,
            total: res.rows.item(i).total,
            usuario: res.rows.item(i).usuario
          })
        }
      }
      this.listaCategoria.next(items as any);
    })
  }

  async crearTablaUsuario() {
    try {
      await this.database.executeSql(this.tablaUsuario, []);
      //ejecución inserts
      this.database.executeSql(this.registroUsuario, []);
      this.database.executeSql(this.registroUsuarioDos, []);
      //cambio de observable
      this.isDBReady.next(true);
      this.buscarUsuario();
    }
    catch (e) {
      this.presentAlert("Error en crearTablaUsuario: " + e);
    }
  }

  async crearTablaRol() {
    try {
      //ejecutar la creación de la tabla
      await this.database.executeSql(this.tablaRol, []);
      //ejecución inserts
      await this.database.executeSql(this.registroRol, []);
      await this.database.executeSql(this.registroRolDos, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.buscarRol();
    } catch (e) {
      this.presentAlert("Error en crear tabla rol: " + e);
    }
  }

  async crearTablaProducto() {
    try {
      //ejecutar la creación de la tabla
      await this.database.executeSql(this.tablaProducto, []);
      //ejecución inserts
      await this.database.executeSql(this.registrarProducto, []);
      await this.database.executeSql(this.registrarProductoDos, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.buscarProducto();
    } catch (e) {
      this.presentAlert("Error en crear tabla producto: " + e);
    }
  }

  async crearTablaPregunta() {
    try {
      //ejecutar la creación de la tabla
      await this.database.executeSql(this.tablaPregunta, []);
      //ejecución inserts
      await this.database.executeSql(this.registroPregunta, []);
      await this.database.executeSql(this.registroPregunta2, []);
      await this.database.executeSql(this.registroPregunta3, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.buscarPregunta();
    } catch (e) {
      this.presentAlert("Error en crear tabla pregunta: " + e);
    }
  }

  async crearTablaCategoria() {
    try {
      //ejecutar la creación de la tabla
      await this.database.executeSql(this.tablaCategoria, []);
      //ejecución inserts
      await this.database.executeSql(this.registroCategoria, []);
      await this.database.executeSql(this.registroCategoriaDos, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.buscarCategoria();
    } catch (e) {
      this.presentAlert("Error en crear tabla Categoria: " + e);
    }
  }

  async crearTablaDetalle() {
    try {
      //ejecutar la creación de la tabla
      await this.database.executeSql(this.tablaDetalle, []);
      //ejecución inserts
      await this.database.executeSql(this.registroDetalle, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.buscarDetalle();
    } catch (e) {
      this.presentAlert("Error en crear tabla Detalle: " + e);
    }
  }  
  
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
