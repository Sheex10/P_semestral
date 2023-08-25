import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { JuguetegatoPage } from './juguetegato.page';

const routes: Routes = [
  {
    path: '',
    component: JuguetegatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class JuguetegatoPageRoutingModule {}
