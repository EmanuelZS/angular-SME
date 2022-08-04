import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { OtsactivasComponent } from './ots activas/otsactivas.component';
import { ProxeventsComponent } from './proxevents/proxevents.component';



const routes: Routes = [
    {
        path: 'dashboard',
        component: PagesComponent,
        children: [
         { path: '', component: DashboardComponent},
         { path: 'proxevents', component: ProxeventsComponent},
         { path: 'otsactivas', component: OtsactivasComponent},
        ]
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PagesRoutingModule {}