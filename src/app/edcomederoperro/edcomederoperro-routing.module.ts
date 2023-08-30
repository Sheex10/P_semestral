import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdcomederoperroPage } from './edcomederoperro.page';

const routes: Routes = [
  {
    path: '',
    component: EdcomederoperroPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdcomederoperroPageRoutingModule {}
