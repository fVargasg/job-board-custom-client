import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { TabsModule } from 'ngx-bootstrap';

import { AppComponent } from './app.component';
import { ExampleComponent } from './example/example.component';
import { ExampleService } from './_services/example.service';
import { NavComponent } from './nav/nav.component';
import { AccountComponent } from './account/account.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from './_services/auth.service';

@NgModule({
   declarations: [
      AppComponent,
      ExampleComponent,
      NavComponent,
      AccountComponent

   ],
   imports: [
      BrowserModule,
      HttpClientModule,
      FormsModule,
      TabsModule.forRoot()
   ],
   providers: [
      ExampleService,
      AuthService
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
