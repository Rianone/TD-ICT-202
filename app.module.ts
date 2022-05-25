import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftPageComponent } from './left-page/left-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RightPageComponent } from './right-page/right-page.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { MenuComponent } from './menu/menu.component';
import { ApercuComponent } from './apercu/apercu.component';
import { MixupComponent } from './mixup/mixup.component';
import {NgxPrintModule} from 'ngx-print';


@NgModule({
  declarations: [
    AppComponent,
    LeftPageComponent,
    RightPageComponent,
    MenuComponent,
    ApercuComponent,
    MixupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    FormsModule,
    NgxPrintModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
