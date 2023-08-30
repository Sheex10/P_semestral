import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdcasaperroPage } from './edcasaperro.page';

const routes: Routes = [
  {
    path: '',
    component: EdcasaperroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdcasaperroPageRoutingModule {}
