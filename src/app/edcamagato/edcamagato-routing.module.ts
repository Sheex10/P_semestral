import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdcamagatoPage } from './edcamagato.page';

const routes: Routes = [
  {
    path: '',
    component: EdcamagatoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdcamagatoPageRoutingModule {}
