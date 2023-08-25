import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JuguetegatoPageRoutingModule } from './juguetegato-routing.module';

import { JuguetegatoPage } from './juguetegato.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JuguetegatoPageRoutingModule
  ],
  declarations: [JuguetegatoPage]
})
export class JuguetegatoPageModule {}
