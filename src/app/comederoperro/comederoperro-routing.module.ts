import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComederoperroPage } from './comederoperro.page';

const routes: Routes = [
  {
    path: '',
    component: ComederoperroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComederoperroPageRoutingModule {}
