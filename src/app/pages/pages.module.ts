import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";

import { SharedModule } from '../shared/shared.module';
import { ComponentsModule } from '../components/components.module';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProxeventsComponent } from './dashboard/proxevents/proxevents.component';
import { OtsactivasComponent } from './dashboard/ots activas/otsactivas.component';
import { PagesComponent } from './pages.component';
import { PoralfabetoComponent } from './edificios/poralfabeto/poralfabeto.component';
import { PorzonaComponent } from './edificios/porzona/porzona.component';
import { InboxComponent } from './mensajes/inbox/inbox.component';
import { WriteComponent } from './mensajes/write/write.component';
import { RoutinesComponent } from './documents/routines/routines.component';
import { ChecklistsComponent } from './documents/checklists/checklists.component';
import { RegulationsComponent } from './documents/regulations/regulations.component';
import { SparepartsComponent } from './supplies/spareparts/spareparts.component';
import { ToolsComponent } from './supplies/tools/tools.component';
import { MaterialComponent } from './supplies/material/material.component';
import { GenerateComponent } from './ots/generate/generate.component';
import { CancelComponent } from './ots/cancel/cancel.component';
import { TracingComponent } from './ots/tracing/tracing.component';
import { AlphabetComponent } from './techdirectory/alphabet/alphabet.component';
import { ZoneComponent } from './techdirectory/zone/zone.component';
import { WorkareaComponent } from './techdirectory/workarea/workarea.component';
import { PvscComponent } from './graphics/pvsc/pvsc.component';
import { CostsComponent } from './graphics/costs/costs.component';
import { PerformanceComponent } from './graphics/performance/performance.component';
import { WeekComponent } from './calendar/week/week.component';
import { MonthComponent } from './calendar/month/month.component';
import { MapComponent } from './maps/map/map.component';
import { TripComponent } from './maps/trip/trip.component';
import { EmergenciesComponent } from './noroutine/emergencies/emergencies.component';
import { EventsComponent } from './noroutine/events/events.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MbscModule } from '@mobiscroll/angular';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    DashboardComponent,
    ProxeventsComponent,
    OtsactivasComponent,
    PagesComponent,
    PoralfabetoComponent,
    PorzonaComponent,
    InboxComponent,
    WriteComponent,
    RoutinesComponent,
    ChecklistsComponent,
    RegulationsComponent,
    SparepartsComponent,
    ToolsComponent,
    MaterialComponent,
    GenerateComponent,
    CancelComponent,
    TracingComponent,
    AlphabetComponent,
    ZoneComponent,
    WorkareaComponent,
    PvscComponent,
    CostsComponent,
    PerformanceComponent,
    WeekComponent,
    MonthComponent,
    MapComponent,
    TripComponent,
    EmergenciesComponent,
    EventsComponent,
    AccountSettingsComponent
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
    RouterModule,
    ComponentsModule,
    FormsModule,
    MbscModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpClientJsonpModule
  ]
})
export class PagesModule { }
