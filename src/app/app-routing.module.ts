import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
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
    path: 'casaperro',
    loadChildren: () => import('./casaperro/casaperro.module').then( m => m.CasaperroPageModule)
  },
  {

    path: 'comederoperro',
    loadChildren: () => import('./comederoperro/comederoperro.module').then( m => m.ComederoperroPageModule)
  },
  {
    path: 'jugueteperro',
    loadChildren: () => import('./jugueteperro/jugueteperro.module').then( m => m.JugueteperroPageModule)
  },
  {
    path: 'camagato',
    loadChildren: () => import('./camagato/camagato.module').then( m => m.CamagatoPageModule)
  },
  {
    path: 'casagato',
    loadChildren: () => import('./casagato/casagato.module').then( m => m.CasagatoPageModule)
  },
  {
    path: 'comederogato',
    loadChildren: () => import('./comederogato/comederogato.module').then( m => m.ComederogatoPageModule)
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
    path: 'carrito',
    loadChildren: () => import('./carrito/carrito.module').then( m => m.CarritoPageModule)
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
    path: 'edcasaperro',
    loadChildren: () => import('./edcasaperro/edcasaperro.module').then( m => m.EdcasaperroPageModule)
  },
  {
    path: 'edcomederoperro',
    loadChildren: () => import('./edcomederoperro/edcomederoperro.module').then( m => m.EdcomederoperroPageModule)
  },
  {
    path: 'edjugueteperro',
    loadChildren: () => import('./edjugueteperro/edjugueteperro.module').then( m => m.EdjugueteperroPageModule)
  },
  {
    path: 'edcamagato',
    loadChildren: () => import('./edcamagato/edcamagato.module').then( m => m.EdcamagatoPageModule)
  },
  {
    path: 'edcasagato',
    loadChildren: () => import('./edcasagato/edcasagato.module').then( m => m.EdcasagatoPageModule)
  },
  {
    path: 'edcomederogato',
    loadChildren: () => import('./edcomederogato/edcomederogato.module').then( m => m.EdcomederogatoPageModule)
  },
  {
    path: 'edjuguetegato',
    loadChildren: () => import('./edjuguetegato/edjuguetegato.module').then( m => m.EdjuguetegatoPageModule)
  },
  {
    path: 'menuadmin',
    loadChildren: () => import('./menuadmin/menuadmin.module').then( m => m.MenuadminPageModule)
  },





];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
