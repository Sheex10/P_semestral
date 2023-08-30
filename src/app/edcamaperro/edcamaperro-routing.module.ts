import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdcamaperroPage } from './edcamaperro.page';

const routes: Routes = [
  {
    path: '',
    component: EdcamaperroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdcamaperroPageRoutingModule {}
