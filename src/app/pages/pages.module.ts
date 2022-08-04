import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProxeventsComponent } from './proxevents/proxevents.component';
import { OtsactivasComponent } from './ots activas/otsactivas.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    DashboardComponent,
    ProxeventsComponent,
    OtsactivasComponent,
    PagesComponent
  ],
  exports: [
    DashboardComponent,
    ProxeventsComponent,
    OtsactivasComponent,
    PagesComponent
  ],

  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class PagesModule { }
