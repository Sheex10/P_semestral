import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComederoperroPageRoutingModule } from './comederoperro-routing.module';

import { ComederoperroPage } from './comederoperro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComederoperroPageRoutingModule
  ],
  declarations: [ComederoperroPage]
})
export class ComederoperroPageModule {}
