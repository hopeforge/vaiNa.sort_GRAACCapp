import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenubarModule } from 'primeng/menubar';
import { ChartModule } from 'angular-highcharts';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { CurrencyPipe } from '@angular/common';

import { AppComponent } from './app.component';
import { AboutComponent } from './pages/about/about.component';
import { appRoutingModule } from './app.routing';
import { HomeComponent } from './pages/home/home.component';
import { NotfoundComponent } from './pages/notfound/notfound.component';
import { DatabaseComponent } from './pages/database/database.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotfoundComponent,
    AboutComponent,
    DatabaseComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    HttpClientModule,
    appRoutingModule,
    MenubarModule,
    ChartModule,
    Ng2SmartTableModule
  ],
  providers: [CurrencyPipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
