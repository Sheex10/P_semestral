import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarpdPageRoutingModule } from './editarpd-routing.module';

import { EditarpdPage } from './editarpd.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarpdPageRoutingModule
  ],
  declarations: [EditarpdPage]
})
export class EditarpdPageModule {}
