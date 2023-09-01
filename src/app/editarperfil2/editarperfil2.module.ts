import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Editarperfil2PageRoutingModule } from './editarperfil2-routing.module';

import { Editarperfil2Page } from './editarperfil2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Editarperfil2PageRoutingModule
  ],
  declarations: [Editarperfil2Page]
})
export class Editarperfil2PageModule {}
