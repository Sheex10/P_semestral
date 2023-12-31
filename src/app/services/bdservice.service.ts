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
import { Carrito} from './carrito';
import { Usu} from './usu';


@Injectable({
  providedIn: 'root'
})
export class BdserviceService {

  //variable de conexion a BD
  public database!: SQLiteObject;

  //variables para la creacion de tablas
  tablaProducto: string = "CREATE TABLE IF NOT EXISTS producto(id_producto INTEGER PRIMARY KEY autoincrement, nombre_producto VARCHAR(30) NOT NULL, descripcion VARCHAR(300) NOT NULL, precio INTEGER NOT NULL, categoria INTEGER, img BLOB, FOREIGN KEY(categoria) REFERENCES categoria(id_categoria));";

  tablaUsuario: string = "CREATE TABLE IF NOT EXISTS usuarios(id INTEGER PRIMARY KEY autoincrement, nombre VARCHAR(20) NOT NULL, apellido VARCHAR(20) NOT NULL, correo VARCHAR(50) NOT NULL, clave VARCHAR(12) NOT NULL, imagen BLOB, idRol INTEGER, FOREIGN KEY(idRol) REFERENCES rol(id_rol));";

  tablaCategoria: string = "CREATE TABLE IF NOT EXISTS categoria(idCategoria INTEGER PRIMARY KEY autoincrement, nombreCategoria VARCHAR(20));";

  tablaRol: string = "CREATE TABLE IF NOT EXISTS rol(idRol INTEGER PRIMARY KEY AUTOINCREMENT, nombreRol TEXT NOT NULL)";

  tablaDetalle: string = "CREATE TABLE IF NOT EXISTS detalle(idDetalle INTEGER PRIMARY KEY autoincrement, total INTEGER NOT NULL, usuario INTEGER, FOREIGN KEY(usuario) REFERENCES usuarios(id));";

  tablaCarrito: string = "CREATE TABLE IF NOT EXISTS carrito(idCarrito INTEGER PRIMARY KEY autoincrement, idProducto INTEGER, idUsuario INTEGER, FOREIGN KEY(idProducto) REFERENCES producto(id_producto) FOREIGN KEY(idUsuario) REFERENCES usuarios(id));";

  tablaUsu: string = "CREATE TABLE IF NOT EXISTS usu(idUsu INTEGER PRIMARY KEY autoincrement, usuarioc INTEGER,  FOREIGN KEY(usuarioc) REFERENCES usuarios(id));";

  //tablaPregunta: string = "CREATE TABLE IF NOT EXISTS pregunta(idP INTEGER PRIMARY KEY AUTOINCREMENT, nombrePregunta VARCHAR(30) NOT NULL);";



  //variables para los insert iniciales
  registroUsuario: string = "INSERT or IGNORE INTO usuarios(id, nombre, apellido, correo, clave, imagen, idRol) values (1, 'Felipe','Shee','felipe@gmail.com','123456789','',2);";
  registroUsuarioDos: string = "INSERT or IGNORE INTO usuarios(id, nombre, apellido, correo, clave, imagen, idRol) values (2, 'Patricio','Reyes','patrick@gmail.com','123456789','',1);";

  registroCategoria: string = "INSERT or IGNORE INTO categoria(idCategoria, nombreCategoria) values(1,'perros');";
  registroCategoriaDos: string = "INSERT or IGNORE INTO categoria(idCategoria, nombreCategoria) values (2,'gatos');";

  registrarProducto: string = "INSERT or IGNORE INTO producto(id_producto,nombre_producto,descripcion,precio,categoria, img) VALUES (1,'Cama Perro','Linda cama cómoda para tu mascota',5990,1,'https://www.amigales.cl/media/catalog/product/cache/e41c4201e1eb7e3f60e4abbd62ba2679/c/a/cama_oval.jpg');";
  registrarProductoDos: string = "INSERT or IGNORE INTO producto(id_producto,nombre_producto,descripcion,precio,categoria, img) VALUES (2,'Cama gato','Linda cama para tu gato',4990,2,'https://www.michy.cl/cdn/shop/products/la-michy-tienda-cama-iglu-en-forma-de-gato-nuestro-best-seller-28824132976817.jpg?v=1635312622');";
  registrarProductoTres: string = "INSERT or IGNORE INTO producto(id_producto,nombre_producto,descripcion,precio,categoria, img) VALUES (3,'Juguete','Juguete para tu perro',6990,1,'https://static.miscota.com/media/1/photos/products/132374/juguete-para-perros-pequenos-pelota-con-pinchos-azul_1_g.jpeg');";
  registrarProductoCuatro: string = "INSERT or IGNORE INTO producto(id_producto,nombre_producto,descripcion,precio,categoria, img) VALUES (4,'Juguete Gato','Divertido juguete para tu gato!',3990,2,'https://www.animal-lovers.cl/wp-content/uploads/2023/09/juguete-gato-raton-orejon-rojo-1-600x600.jpg');";
  registrarProductoCinco: string = "INSERT or IGNORE INTO producto(id_producto,nombre_producto,descripcion,precio,categoria, img) VALUES (5,'Plato','Plato para tu perro para su comida',7990,1,'https://faunasalud.cl/wp-content/uploads/2021/02/12-1.jpg');";
  registrarProductoSeis: string = "INSERT or IGNORE INTO producto(id_producto,nombre_producto,descripcion,precio,categoria, img) VALUES (6,'Casa gato','Linda casa para tu gato',10990,2,'https://ovacen.com/wp-content/uploads/2019/09/casa-gatos-lana.jpg');";

  registroRol: string = "INSERT or IGNORE INTO rol(idRol, nombreRol) VALUES (1,'Usuario');";
  registroRolDos: string = "INSERT or IGNORE INTO rol(idRol, nombreRol) VALUES (2,'Administrador');";

  registroDetalle: string = "INSERT or IGNORE INTO detalle(idDetalle, total, usuario) values (21,12990,2);";

  //registroPregunta: string = "INSERT or IGNORE INTO pregunta(idP, nombrePregunta) VALUES(1, '¿cual es tu comida favorita?');";
  //registroPregunta2: string = "INSERT or IGNORE INTO pregunta(idP, nombrePregunta) VALUES(2, '¿cual es tu color favorito?');";
  //registroPregunta3: string = "INSERT or IGNORE INTO pregunta(idP, nombrePregunta) VALUES(3, '¿nombre de tu mascota?');";

  //No se si esta bien este insert!
  //observables de las tablas
  listaProductos = new BehaviorSubject([]);
  listaUsuarios = new BehaviorSubject([]);
  listaRol = new BehaviorSubject([]);
  listaCategoria = new BehaviorSubject([]);
  listaDetalle = new BehaviorSubject([]);
  listaPregunta = new BehaviorSubject([]);
  listaCarrito = new BehaviorSubject([]);
  listaUsu = new BehaviorSubject([]);



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

  fetchcarrito(): Observable<Carrito[]> {
    return this.listaCarrito.asObservable();
  }
  fetchusu(): Observable<Usu[]> {
    return this.listaUsu.asObservable();
  }

  //Rol
  /*buscarRol() {
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
  }*/

  insertarRol(nombre_rol: any) {
    return this.database.executeSql('INSERT INTO rol(nombre_rol) VALUES(?)', [nombre_rol]).then(res => {
      this.cargarRol();
    })
  }

  actualizarRol(id_rol: any, nombre_rol: any) {
    return this.database.executeSql('UPDATE rol SET nombre_rol=? WHERE id_rol=?', [nombre_rol, id_rol]).then(res => {
      this.cargarRol();
    })
  }

  eliminarRol(id_rol: any) {
    return this.database.executeSql('DELETE FROM rol WHERE id_rol = ?', [id_rol]).then(res => {
      this.cargarRol();
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
  buscarUsuario() {
    return this.database.executeSql('SELECT * FROM usuarios', []).then(res => {
      let items: Usuario[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id: res.rows.item(i).id,
            nombre: res.rows.item(i).nombre,
            correo: res.rows.item(i).correo,
            apellido: res.rows.item(i).apellido,
            imagen: res.rows.item(i).imagen,
            id_rol: res.rows.item(i).id_rol,
          })
        }
      }
      this.listaUsuarios.next(items as any);
    })
  }

  insertarUsuario(nombre: any, apellido: any, correo: any, clave: any, imagen: any, id_rol: any) {
    return this.database.executeSql('INSERT INTO usuarios(nombre, apellido, correo, clave, imagen, idRol ) VALUES(?,?,?,?,?,1)', [nombre, apellido, correo, clave, imagen]).then(res => {
      this.cargarUsuarios();
    }).catch(e => {
      this.presentAlert("Error en insertar usuario");
    })
  }

  actualizarUsuario(id: any, nombre: any, apellido: any, correo: any, clave: any, imagen: any, id_rol: any) {
    return this.database.executeSql('UPDATE usuarios SET nombre= ?, apellido= ?, correo= ?, clave= ?, imagen= ?, id_rol= ? WHERE id= ?', [nombre, apellido, correo, clave,  imagen, id_rol, id]).then(res => {
      this.cargarUsuarios();
    })
  }

  actualizaPerfilUsuario(id: any, nombre: any, apellido: any, imagen: any) {
    return this.database.executeSql('UPDATE usuarios SET nombre= ?, apellido=?, imagen= ? WHERE id= ?', [nombre, apellido,  imagen, id])
      .then(res => {
        this.cargarUsuarios();
      }).catch(e => {
        this.presentAlert("Error Modificar Usuario " + e)
      })
  }

  actualizarclaveUsuario(id: any, clave: any) {
    return this.database.executeSql('UPDATE usuarios SET clave= ? WHERE id= ?', [clave, id])
      .then(res => {
        this.cargarUsuarios();
      }).catch(e => {
        this.presentAlert("Error Modificar Clave: " + e)
      })
  }

  actualizarRolUsuario(id: any, id_rol: any) {
    return this.database.executeSql('UPDATE usuarios SET id_rol= ? WHERE id= ?', [id_rol, id])
      .then(res => {
        this.cargarUsuarios();
      }).catch(e => {
        this.presentAlert("Error Modificar Rol: " + e)
      })
  }

  eliminarUsuario(id: any) {
    return this.database.executeSql('DELETE FROM usuarios WHERE id = ?', [id]).then(res => {
      this.cargarUsuarios();
    })
  }
  //Fin Usuario

  //Carrito

  cargarCarrito() {
    return this.database.executeSql('SELECT * FROM carrito', [])
      .then(res => {
        let items: any = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              idCarrito: res.rows.item(i).idCarrito,
              idProducto: res.rows.item(i).idProducto,
              idUsuario: res.rows.item(i).idUsuario,
            });
          }
        }
        this.listaCarrito.next(items as any);
      }).catch(e => {
        this.presentAlert("error: " + e)
      })
  }

  insertarCarrito(idProducto: any, idUsuario: any) {
    return this.database.executeSql('INSERT INTO carrito(idProducto, idUsuario) VALUES(?,?)', [idProducto, idUsuario]).then(res => {
      this.cargarCarrito();
    }).catch(e => {
      this.presentAlert("Error en insertar al carrito");
    })
  }

  eliminarCarrito(idCarrito: any) {
    return this.database.executeSql('DELETE FROM carrito WHERE idCarrito = ?', [idCarrito]).then(res => {
      this.cargarCarrito();
    })
  }
  //Fin carrito
    //usuario conectado

    cargarUsu() {
      return this.database.executeSql('SELECT * FROM usu', [])
        .then(res => {
          let items: any = [];
          if (res.rows.length > 0) {
            for (var i = 0; i < res.rows.length; i++) {
              items.push({
                idUsu: res.rows.item(i).idUsu,
                usuarioc: res.rows.item(i).usuarioc,
                
              });
            }
          }
          this.listaUsu.next(items as any);
        }).catch(e => {
          this.presentAlert("error: " + e)
        })
    }
  
    insertarUsu( usuarioc: any) {
      return this.database.executeSql('INSERT INTO usu(usuarioc) VALUES(?)', [ usuarioc]).then(res => {
        this.cargarUsu();
      }).catch(e => {
        this.presentAlert("Error en insertar al usu");
      })
    }
  
    eliminarUsu(idUsu: any) {
      return this.database.executeSql('DELETE FROM usu WHERE idUsu = ?', [idUsu]).then(res => {
        this.cargarUsu();
      })
    }
    async vaciarTablaUsu() {
      try {
        await this.database.executeSql('DELETE FROM usu', []);
        await this.database.executeSql('DELETE FROM sqlite_sequence WHERE name="usu"', []);
        this.cargarUsu(); // Recargar la lista de usu después de eliminar los registros
      } catch (error) {
        console.error('Error al vaciar tabla usu:', error);
      }
    }
    //fin usuario conectado

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
        this.crearTablaCarrito();
        this.crearTablaUsu();

        //this.crearTablaPregunta();
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
              id_rol: res.rows.item(i).idRol
            });
          }
        }
        this.listaUsuarios.next(items as any);
      }).catch(e => {
        this.presentAlert("Error: " + e)
      })
  }

  cargarRol() {
    return this.database.executeSql('SELECT * FROM rol', [])
      .then(res => {
        let items: any = [];
        if (res.rows.length > 0) {
          for (var i = 0; i < res.rows.length; i++) {
            items.push({
              id_rol: res.rows.item(i).id_rol,
              nombre_rol: res.rows.item(i).nombre_rol,
            });
          }
        }
        this.listaRol.next(items as any);
      }).catch(e => {
        this.presentAlert("Error: " + e)
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
              nombre_producto: res.rows.item(i).nombre_producto,
              descripcion: res.rows.item(i).descripcion,
              precio: res.rows.item(i).precio,
              categoria: res.rows.item(i).categoria,
              img: res.rows.item(i).img
            });
          }
        }
        this.listaProductos.next(items as any);
      }).catch(e => {
        this.presentAlert("Error al cargar producto " + e)
      })
  }

  insertarProducto(nombre:any,desc:any,precio:any,categoria:any,img:any){
    return this.database.executeSql('INSERT INTO producto(nombre_producto,descripcion,precio,categoria,img) VALUES(?,?,?,?,?)',[nombre,desc,precio,categoria,img])
    .then(e=>{
      this.cargarProducto()
    }).catch(e=>{
      console.log("error insertar producto: "+e);
    })
  }
  eliminarProducto(id_producto: any) {
    return this.database.executeSql('DELETE FROM producto WHERE id_producto=?', [id_producto])
      .then(res => {
        this.cargarProducto();
      }).catch(e=>{
        console.log("error eliminar producto: "+e)
      })
  }

  modificarProducto(id:any,nombre:any,desc:any,precio:any,categoria:any,img:any){
    return this.database.executeSql('UPDATE producto SET nombre_producto = ?,descripcion = ?, precio = ?, categoria = ?, img = ? WHERE id_producto = ?',[nombre,desc,precio,categoria,img,id])
    .then(res=>{
      this.cargarProducto()
    }).catch(e=>{
      console.log("error modificar producto: "+ e)
    })
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

  buscarCategoria() {
    return this.database.executeSql('SELECT * FROM categoria', []).then(res => {
      let items: Categoria[] = [];
      if (res.rows.length > 0) {
        for (var i = 0; i < res.rows.length; i++) {
          items.push({
            id_categoria: res.rows.item(i).idCategoria,
            nombre_categoria: res.rows.item(i).nombreCategoria
          })
        }
      }
      this.listaCategoria.next(items as any);
    })
  }

  buscarDetalle() {
    return this.database.executeSql('SELECT * FROM detalle', []).then(res => {
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
      this.cargarUsuarios();

    }
    catch (e) {
      this.presentAlert("Error en crear la Tabla Usuario: " + e);
    }
  }

  async crearTablaRol() {
    try {
      //ejecutar la creación de la tabla
      //await this.database.executeSql('DROP TABLE rol;', [])
      await this.database.executeSql(this.tablaRol, []);
      //ejecución inserts
      await this.database.executeSql(this.registroRol, []);
      await this.database.executeSql(this.registroRolDos, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.cargarRol();

    } catch (e) {
      console.log("Error en crear tabla rol: " + JSON.stringify(e));
    }
  }

  async crearTablaProducto() {
    try {
      //ejecutar la creación de la tabla
      await this.database.executeSql(this.tablaProducto, []);
      //ejecución inserts
      await this.database.executeSql(this.registrarProducto, []);
      await this.database.executeSql(this.registrarProductoDos, []);
      await this.database.executeSql(this.registrarProductoTres, []);
      await this.database.executeSql(this.registrarProductoCuatro, []);
      await this.database.executeSql(this.registrarProductoCinco, []);
      await this.database.executeSql(this.registrarProductoSeis, []);


      //cambio de observable de BD
      this.isDBReady.next(true);
      this.cargarProducto();
    } catch (e) {
      this.presentAlert("Error en crear tabla producto: " + e);
    }
  }

  /*async crearTablaPregunta() {
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
  }*/

  async crearTablaCategoria() {
    try {
      //ejecutar la creación de la tabla
      //await this.database.executeSql("Drop table categoria;",[])
      await this.database.executeSql(this.tablaCategoria, []);
      //ejecución inserts
      await this.database.executeSql(this.registroCategoria, []);
      await this.database.executeSql(this.registroCategoriaDos, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.buscarCategoria();
    } catch (e) {
      console.log("Error en crear tabla Categoria: " + JSON.stringify(e));
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
      console.log("Error en crear tabla Detalle: " + JSON.stringify(e));
    }
  }

  async crearTablaCarrito() {
    try {
      //ejecutar la creación de la tabla
      //await this.database.executeSql('DROP TABLE rol;', [])
      await this.database.executeSql(this.tablaCarrito, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.cargarCarrito();

    } catch (e) {
      console.log("Error en crear tabla carrito: " + JSON.stringify(e));
    }
  }

  async crearTablaUsu() {
    try {
      //ejecutar la creación de la tabla
      //await this.database.executeSql('DROP TABLE usu;', [])
      await this.database.executeSql(this.tablaUsu, []);
      //cambio de observable de BD
      this.isDBReady.next(true);
      this.cargarUsu();

    } catch (e) {
      console.log("Error en crear tabla usu: " + JSON.stringify(e));
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