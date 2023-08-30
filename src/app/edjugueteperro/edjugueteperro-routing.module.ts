import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdjugueteperroPage } from './edjugueteperro.page';

const routes: Routes = [
  {
    path: '',
    component: EdjugueteperroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdjugueteperroPageRoutingModule {}
