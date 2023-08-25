import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasagatoPage } from './casagato.page';

const routes: Routes = [
  {
    path: '',
    component: CasagatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasagatoPageRoutingModule {}
