import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { RouteReuseStrategy } from '@angular/router';
import { NgxRouteReuseService } from 'ngx-route-reuse';

@NgModule({
  declarations: [
    AppComponent,
    Page1Component,
    Page2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: NgxRouteReuseService}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
