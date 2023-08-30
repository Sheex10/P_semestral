import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdjuguetegatoPage } from './edjuguetegato.page';

const routes: Routes = [
  {
    path: '',
    component: EdjuguetegatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdjuguetegatoPageRoutingModule {}
