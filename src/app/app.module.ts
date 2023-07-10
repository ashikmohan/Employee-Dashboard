import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule,HttpClient} from '@angular/common/http';
import { FetchingService } from './fetching.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    EmployeeFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FetchingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
