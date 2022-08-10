import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtsactivasComponent } from './dashboard/ots activas/otsactivas.component';
import { ProxeventsComponent } from './dashboard/proxevents/proxevents.component';
import { PoralfabetoComponent } from './edificios/poralfabeto/poralfabeto.component';
import { PorzonaComponent } from './edificios/porzona/porzona.component';
import { InboxComponent } from './mensajes/inbox/inbox.component';
import { WriteComponent } from './mensajes/write/write.component';
import { ChecklistsComponent } from './documents/checklists/checklists.component';
import { RegulationsComponent } from './documents/regulations/regulations.component';
import { RoutinesComponent } from './documents/routines/routines.component';
import { MaterialComponent } from './supplies/material/material.component';
import { SparepartsComponent } from './supplies/spareparts/spareparts.component';
import { ToolsComponent } from './supplies/tools/tools.component';
import { GenerateComponent } from './ots/generate/generate.component';
import { TracingComponent } from './ots/tracing/tracing.component';
import { AlphabetComponent } from './techdirectory/alphabet/alphabet.component';
import { WorkareaComponent } from './techdirectory/workarea/workarea.component';
import { ZoneComponent } from './techdirectory/zone/zone.component';
import { CostsComponent } from './graphics/costs/costs.component';
import { PerformanceComponent } from './graphics/performance/performance.component';
import { PvscComponent } from './graphics/pvsc/pvsc.component';
import { MonthComponent } from './calendar/month/month.component';
import { WeekComponent } from './calendar/week/week.component';
import { MapComponent } from './maps/map/map.component';
import { TripComponent } from './maps/trip/trip.component';
import { EmergenciesComponent } from './noroutine/emergencies/emergencies.component';
import { EventsComponent } from './noroutine/events/events.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';



const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
         { path: '', component: DashboardComponent},
         { path: 'proxevents', component: ProxeventsComponent},
         { path: 'otsactivas', component: OtsactivasComponent},
         { path: 'poralfabeto', component: PoralfabetoComponent},
         { path: 'porzona', component: PorzonaComponent},
         { path: 'inbox', component: InboxComponent},
         { path: 'write', component: WriteComponent},
         { path: 'checklists', component: ChecklistsComponent},
         { path: 'regulations', component: RegulationsComponent},
         { path: 'routines', component: RoutinesComponent},
         { path: 'material', component: MaterialComponent},
         { path: 'spareparts', component: SparepartsComponent},
         { path: 'tools', component: ToolsComponent},
         { path: 'cancel', component: GenerateComponent},
         { path: 'generate', component: GenerateComponent},
         { path: 'tracing', component: TracingComponent},
         { path: 'alphabet', component: AlphabetComponent},
         { path: 'workarea', component: WorkareaComponent},
         { path: 'zone', component: ZoneComponent},
         { path: 'costs', component: CostsComponent},
         { path: 'performance', component: PerformanceComponent},
         { path: 'pvsc', component: PvscComponent},
         { path: 'month', component: MonthComponent},
         { path: 'week', component: WeekComponent},
         { path: 'map', component: MapComponent},
         { path: 'trip', component: TripComponent},
         { path: 'emergencies', component: EmergenciesComponent},
         { path: 'events', component: EventsComponent},
         { path: 'account-settings', component: AccountSettingsComponent},

        ],

    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}