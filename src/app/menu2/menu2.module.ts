import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Menu2PageRoutingModule } from './menu2-routing.module';

import { Menu2Page } from './menu2.page';

import { HttpClientModule } from '@angular/common/http';
import { Menu2Provider } from './menu2.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Menu2PageRoutingModule,
    HttpClientModule
  ],
  declarations: [Menu2Page],
  providers: [Menu2Provider],
})

export class Menu2PageModule {}
