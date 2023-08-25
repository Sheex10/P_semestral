import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JugueteperroPage } from './jugueteperro.page';

const routes: Routes = [
  {
    path: '',
    component: JugueteperroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JugueteperroPageRoutingModule {}
