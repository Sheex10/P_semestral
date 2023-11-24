import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'perros',
    loadChildren: () => import('./perros/perros.module').then( m => m.PerrosPageModule)
  },
  {
    path: 'gatos',
    loadChildren: () => import('./gatos/gatos.module').then( m => m.GatosPageModule)
  },
  {
    path: 'cuenta',
    loadChildren: () => import('./cuenta/cuenta.module').then( m => m.CuentaPageModule)
  },
  {
    path: 'camaperro',
    loadChildren: () => import('./camaperro/camaperro.module').then( m => m.CamaperroPageModule)
  },
  {
    path: 'juguetegato',
    loadChildren: () => import('./juguetegato/juguetegato.module').then( m => m.JuguetegatoPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)

  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
  {
    path: 'editarpd',
    loadChildren: () => import('./editarpd/editarpd.module').then( m => m.EditarpdPageModule)
  },
  {
    path: 'edcamaperro',
    loadChildren: () => import('./edcamaperro/edcamaperro.module').then( m => m.EdcamaperroPageModule)
  },
  {
    path: 'menuadmin',
    loadChildren: () => import('./menuadmin/menuadmin.module').then( m => m.MenuadminPageModule)
  },
  {
    path: 'productoed',
    loadChildren: () => import('./productoed/productoed.module').then( m => m.ProductoedPageModule)
  },
  {
    path: 'editarperfil',
    loadChildren: () => import('./editarperfil/editarperfil.module').then( m => m.EditarperfilPageModule)
  },
  {
    path: 'editarperfil2',
    loadChildren: () => import('./editarperfil2/editarperfil2.module').then( m => m.Editarperfil2PageModule)
  },
  {
    path: 'usocamara',
    loadChildren: () => import('./usocamara/usocamara.module').then( m => m.UsocamaraPageModule)
  },
  {
    path: 'agregar-producto',
    loadChildren: () => import('./agregar-producto/agregar-producto.module').then( m => m.AgregarProductoPageModule)
  },

  //Cualquier pagina nueva debe ir antes que esto.
  {
    path: '**',
    loadChildren: () => import('./notfound/notfound.module').then( m => m.NotfoundPageModule)
  },

  { path: '', redirectTo: '/products', pathMatch: 'full' },


];

  
  


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
