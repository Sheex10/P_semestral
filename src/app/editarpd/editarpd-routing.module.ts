import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarpdPage } from './editarpd.page';

const routes: Routes = [
  {
    path: '',
    component: EditarpdPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarpdPageRoutingModule {}
