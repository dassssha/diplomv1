import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { GostsComponent } from './gosts/gosts.component';
import { GostsbyrtComponent } from './gostsbyrt/gostsbyrt.component';
import { KolpgaikaComponent } from './kolpgaika/kolpgaika.component';
import { KruglgaikaComponent } from './kruglgaika/kruglgaika.component';
import { ProrezngaikaComponent } from './prorezngaika/prorezngaika.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    GostsComponent,
    GostsbyrtComponent,
    KolpgaikaComponent,
    KruglgaikaComponent,
    ProrezngaikaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
