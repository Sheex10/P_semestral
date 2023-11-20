import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ProductsPage } from './pages/products/products.page';
import { CartPage } from './pages/cart/cart.page';

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
    path: 'recuperar',
    loadChildren: () => import('./recuperar/recuperar.module').then( m => m.RecuperarPageModule)
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
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then( m => m.ProductsPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then( m => m.CartPageModule)
  },
  { path: 'products', component: ProductsPage },
  { path: 'cart', component: CartPage },
  { path: '', redirectTo: '/products', pathMatch: 'full' },


];

  
  


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
