import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComederogatoPageRoutingModule } from './comederogato-routing.module';

import { ComederogatoPage } from './comederogato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComederogatoPageRoutingModule
  ],
  declarations: [ComederogatoPage]
})
export class ComederogatoPageModule {}
