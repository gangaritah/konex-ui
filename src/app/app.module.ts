import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CdTimerModule } from 'angular-cd-timer';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './components/shared/shared.module';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SiNoPipe } from './pipes/si-no.pipe';




import { PublicCasePipe } from './pipes/public-case.pipe';
import { StatusPipe } from './pipes/status.pipe';
import { ColorStatusPipe } from './pipes/color-status.pipe';


@NgModule({
  declarations: [
    AppComponent,
  
    NavbarComponent,
    SiNoPipe,
  
    PublicCasePipe,
    StatusPipe,
    ColorStatusPipe,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    SharedModule,
    CdTimerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
