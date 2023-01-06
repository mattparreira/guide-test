import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';
import {FinanceService} from './services/finance.service';
import {HttpClientModule} from '@angular/common/http';
import {ListComponent} from './list/list.component';
import {TableModule} from 'primeng/table';
import {InputTextModule} from 'primeng/inputtext';
import {ChartComponent} from './chart/chart.component';
import {ChartModule} from 'primeng/chart';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ListComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ButtonModule,
    TableModule,
    InputTextModule,
    ChartModule
  ],
  providers: [
    FinanceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
