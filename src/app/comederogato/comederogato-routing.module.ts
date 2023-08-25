import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComederogatoPage } from './comederogato.page';

const routes: Routes = [
  {
    path: '',
    component: ComederogatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComederogatoPageRoutingModule {}
