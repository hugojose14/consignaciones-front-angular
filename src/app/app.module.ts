import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from '@home/home.component';
import { ProductoModule } from '@producto/producto.module';
import { CoreModule } from '@core/core.module';
import { CookieService } from 'ngx-cookie-service';
import {ConsignacionModule} from './feature/consignacion/consignacion.module';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProductoModule,
    CoreModule,
    ConsignacionModule,
    BrowserAnimationsModule,
    NgbModule
    
  ],
  exports:[],
  providers: [CookieService],
    bootstrap: [AppComponent],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
