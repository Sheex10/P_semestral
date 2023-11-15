import { Injectable } from '@angular/core';
import { SQLite, SQLiteObject } from '@awesome-cordova-plugins/sqlite/ngx';
import { AlertController, Platform, ToastController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { Producto } from './producto';
import { ActivatedRoute } from '@angular/router';
import { Rol } from './rol';
import { Usuario } from './usuario';
import { Categoria } from './categoria';
import { Detalle } from './detalle';


@Injectable({
  providedIn: 'root'
})
export class BdserviceService {

  //variable de conexion a BD
  public database!: SQLiteObject;

  //variables para la creacion de tablas
  tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(id_producto INTEGER PRIMARY KEY autoincrement, nombre_producto VARCHAR(30) NOT NULL, descripcion VARCHAR(300) NOT NULL, precio INTEGER NOT NULL, categoria INTEGER, img BLOB, FOREIGN KEY(categoria) REFERENCES tablaCategoria(id_categoria));";

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuarios(id INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL, apellido VARCHAR(20) NOT NULL, correo VARHCAR (50) NOT NULL, clave VARCHAR (12) NOT NULL, rol INTEGER, imagen BLOB, idRol INTEGER,FOREIGN KEY(idRol) REFERENCES tablaRol(id_rol));";

  tablaCategoria: string = "CREATE TABLE IF NOT EXISTS categoria(id_categoria PRIMARY KEY autoincrement, nombre_categoria VARCHAR (20));";

  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(id_rol PRIMARY KEY autoincrement, nombre_rol VARCHAR (20));";

  tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle(id_detalle PRIMARY KEY autoincrement, total INTEGER NOT NULL, usuario INTEGER, FOREIGN KEY(usuario) REFERENCES tablaUsuario(id));";

  tablaPregunta: string = "CREATE TABLE IF NOT EXISTS pregunta(idPregunta INTEGER PRIMARY KEY AUTOINCREMENT, nombrePregunta VARCHAR(30) NOT NULL);";



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

  registroPregunta: string = "INSERT or IGNORE INTO pregunta(idP, nombreP) VALUES(1, '¿cual es tu comida favorita?');";
  registroPregunta2: string = "INSERT or IGNORE INTO pregunta(idP, nombreP) VALUES(2, '¿cual es tu color favorito?');";
  registroPregunta3: string = "INSERT or IGNORE INTO pregunta(idP, nombreP) VALUES(3, '¿nombre de tu mascota?');";

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

  fetchpregunta(): Observable<Producto[]> {
    return this.listaProductos.asObservable();
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
    return this.database.executeSql('INSERT INTO tablaRol(nombre_rol) VALUES(?)', [nombre_rol]).then(res => {
      this.buscarRol();
    })
  }

  actualizarRol(id_rol: any, nombre_rol: any) {
    return this.database.executeSql('UPDATE tablaRol SET nombre_rol=? WHERE idR=?', [nombre_rol, id_rol]).then(res => {
      this.buscarRol();
    })
  }

  eliminarRol(id_rol: any) {
    return this.database.executeSql('DELETE FROM tablaRol WHERE id_rol = ?', [id_rol]).then(res => {
      this.buscarRol();
    })
  }
  //Fin rol
  async presentAlert(msj: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: 'Important message',
      message: msj,
      buttons: ['OK'],
    });
    await alert.present();
  }




  crearBD() {
    this.platform.ready().then(() => {
      //creación de la base de datos
      this.sqlite.create({
        name: 'bdProyecto',
        location: 'default'
      }).then((db: SQLiteObject) => {
        //capturar la conexión a la BD
        this.database = db;
        //comando que ejecuta la creación de tablas
        this.crearTablas();
      }).catch(e => {
        this.presentAlert("Error en crear la Base de datos: " + e);
      })
    })
  }

  async crearTablas() {
    try {
      await this.database.executeSql(this.tablaProducto, []);
      await this.database.executeSql(this.tablaUsuario, []);
      await this.database.executeSql(this.tablaCategoria, []);
      await this.database.executeSql(this.tablaRol, []);
      await this.database.executeSql(this.tablaDetalle, []);
      this.isDBReady.next(true);

    } catch (error) {
      this.presentAlert("Error en crear tablas: " + error);
    }
  }
  async insertTablas() {
    try {
      await this.database.executeSql(this.registrarProducto, []);
      await this.database.executeSql(this.registrarProductoDos, []);
      await this.database.executeSql(this.registroUsuario, []);
      await this.database.executeSql(this.registroUsuarioDos, []);
      await this.database.executeSql(this.registroRol, []);
      await this.database.executeSql(this.registroRolDos, []);
      await this.database.executeSql(this.registroCategoria, []);
      await this.database.executeSql(this.registroCategoriaDos, []);
      this.isDBReady.next(true);

    } catch (error) {
      this.presentAlert("Error en insertar en la tabla: " + error);
    }
  }

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
              idRol: res.rows.item(i).idRol
            });
          }
        }
        this.listaUsuarios.next(items as any);
      }).catch(e => {
        this.presentAlert("error: " + e)
      })
  }


  insertarUsuario(nombre: any, apellido: any, correo: any, clave: any) {
    return this.database.executeSql('INSERT INTO usuarios(nombre, apellido, correo, clave, imagen, rol) VALUES(?,?,?,?,?,?)', [nombre, apellido, correo, clave, "", 2])
      .then(res => {
        this.cargarUsuarios();
      }).catch(e => {
        this.presentAlert("Error al insertar usuario" + e)
      })
  }

  cargarProducto() {
    return this.database.executeSql('SELECT * FROM PRODUCTO', [])
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
    return this.database.executeSql('DELETE FROM PRODUCTO WHERE ID=?', [id])
      .then(res => {
        this.cargarProducto();
      })
  }

  actualizaPerfilUsuario(id: any, nombre: any, apellido: any, foto: any) {
    return this.database.executeSql('UPDATE usuario SET nombre=?, apellido= ?, foto= ? WHERE id= ?', [nombre, apellido, foto, id])
      .then(res => {
        this.cargarUsuarios();
      }).catch(e => {
        this.presentAlert("Error Modificar Usuario " + e)
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
            nombre_producto: res.rows.item(i).nombre_producto,
            descripcion: res.rows.item(i).descripcion,
            precio: res.rows.item(i).precio
          })

        }
      }
      //actualizo el observable
      this.listaProductos.next(items as any);

    })
  }

  bdState() {
    return this.isDBReady.asObservable();
  }
  fetchUsuarios(): Observable<any> {
    return this.listaUsuarios.asObservable();
  }


}
