import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ExampleService } from './_services/example.service';
import { NavComponent } from './nav/nav.component';

@NgModule({
   declarations: [
      AppComponent,
      ExampleComponent,
      NavComponent
   ],
   imports: [
      BrowserModule,
      HttpClientModule
   ],
   providers: [
      ExampleService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
