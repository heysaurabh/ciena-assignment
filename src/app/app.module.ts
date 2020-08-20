import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { NgApexchartsModule } from 'ng-apexcharts';

import { PanelModule } from 'primeng/panel';
import { MenubarModule } from 'primeng/menubar';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { ToolbarModule } from 'primeng/toolbar';
import { SplitButtonModule } from 'primeng/splitbutton';
import { MenuModule } from 'primeng/menu';
import { TabViewModule } from 'primeng/tabview';
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import {MessageService} from 'primeng/api';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DataTableComponent } from './data-table/data-table.component';
import { TabsComponent } from './tabs/tabs.component';
import { AppService } from './service/app.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SeverityChartComponent } from './severity-chart/severity-chart.component';

const PrimengModule = [
  PanelModule,
  MenubarModule,
  InputTextModule,
  ButtonModule,
  ToolbarModule,
  SplitButtonModule,
  MenuModule,
  TabViewModule,
  TableModule,
  ToastModule,
  OverlayPanelModule
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DataTableComponent,
    TabsComponent,
    DashboardComponent,
    SeverityChartComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    NgApexchartsModule,
    ...PrimengModule
  ],
  providers: [MessageService, AppService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
