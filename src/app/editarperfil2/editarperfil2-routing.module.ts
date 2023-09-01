import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Editarperfil2Page } from './editarperfil2.page';

const routes: Routes = [
  {
    path: '',
    component: Editarperfil2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Editarperfil2PageRoutingModule {}
