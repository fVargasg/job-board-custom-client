import { Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ExampleComponent } from './example/example.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegionComponent } from './region/region.component';
import { LocationComponent } from './location/location.component';


export const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'region', component: RegionComponent },
  { path: 'location', component: LocationComponent },
  { path: 'example', component: ExampleComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

