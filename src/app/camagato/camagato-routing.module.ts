import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CamagatoPage } from './camagato.page';

const routes: Routes = [
  {
    path: '',
    component: CamagatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CamagatoPageRoutingModule {}
