import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';


import { AppComponent } from './app.component';
import { CabecalhoComponent } from './cabecalho/cabecalho.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DetalhesComponent } from './detalhes/detalhes.component';
import { RodapeComponent } from './rodape/rodape.component';




@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    DetalhesComponent,
    RodapeComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
