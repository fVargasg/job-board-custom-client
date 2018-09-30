import { Routes }  from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { ExampleComponent } from './example/example.component';
import { DashboardComponent } from './dashboard/dashboard.component';


export const appRoutes: Routes = [

  { path: 'home', component: HomeComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'example', component: ExampleComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' }
]

