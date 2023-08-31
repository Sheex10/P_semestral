import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductoedPageRoutingModule } from './productoed-routing.module';

import { ProductoedPage } from './productoed.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductoedPageRoutingModule
  ],
  declarations: [ProductoedPage]
})
export class ProductoedPageModule {}
