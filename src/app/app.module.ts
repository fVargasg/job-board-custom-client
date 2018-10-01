import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule, BsDropdownModule } from 'ngx-bootstrap';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ExampleService } from './_services/example.service';
import { NavComponent } from './nav/nav.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';
import { AlertifyService } from './_services/alertify.service';
import { HomeComponent } from './home/home.component';
import { appRoutes } from './routes';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegionComponent } from './region/region.component';
import { CommonService } from './_services/common.service';
import { LocationComponent } from './location/location.component';


@NgModule({
   declarations: [
      AppComponent,
      ExampleComponent,
      NavComponent,
      HomeComponent,
      DashboardComponent,
      RegionComponent,
      LocationComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      TabsModule.forRoot(),
      BsDropdownModule.forRoot(),
      RouterModule.forRoot(appRoutes)
   ],
   providers: [
      ExampleService,
      AuthService,
      AlertifyService,
      CommonService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
