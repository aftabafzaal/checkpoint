import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { OverviewComponent } from './dashboard/overview/overview.component';
import { ActivitiesPageComponent } from './dashboard/activities-page/activities-page.component';

const routes: Routes = [
{
path: '',
component: HomeComponent
},

{
path: 'dashboard',
component: OverviewComponent
},

{
path: 'dashboard/overview',
component: OverviewComponent
},

{
path: 'dashboard/activities',
component: ActivitiesPageComponent
}

];

@NgModule({
imports: [RouterModule.forRoot(routes)],
exports: [RouterModule]
})
export class AppRoutingModule { }
