import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ActivatedRouteSnapshot, RouteReuseStrategy, RouterModule} from '@angular/router';

import {IonicModule, IonicRouteStrategy} from '@ionic/angular';

import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {ManufacturerComponent} from './view/manufacturer/manufacturer.component';
import {ModelsComponent} from './view/models/models.component';
import {VariantsComponent} from './view/variants/variants.component';
import {HttpClientModule} from '@angular/common/http';

import {SaleComponent} from './view/sale/sale.component';
import {CommonModule} from '@angular/common';
import {ReactiveFormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    ManufacturerComponent,
    ModelsComponent,
    VariantsComponent,
    SaleComponent
  ],
    imports: [
        BrowserModule,
        CommonModule,
        IonicModule.forRoot(),
        AppRoutingModule,
        HttpClientModule,
        ReactiveFormsModule
    ],
  providers: [
    {provide: RouteReuseStrategy, useClass: IonicRouteStrategy}
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
