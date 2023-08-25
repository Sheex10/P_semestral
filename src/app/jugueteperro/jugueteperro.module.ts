import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { JugueteperroPageRoutingModule } from './jugueteperro-routing.module';

import { JugueteperroPage } from './jugueteperro.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    JugueteperroPageRoutingModule
  ],
  declarations: [JugueteperroPage]
})
export class JugueteperroPageModule {}
