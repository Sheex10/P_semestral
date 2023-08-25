import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasaperroPage } from './casaperro.page';

const routes: Routes = [
  {
    path: '',
    component: CasaperroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasaperroPageRoutingModule {}
