import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/modals/login/login.component';
import { RegisterComponent } from './Components/modals/register/register.component';
import { FormsModule, ReactiveFormsModule }         from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {  MatFormFieldModule,MatInputModule} from '@angular/material';
import { HttpClientModule} from "@angular/common/http";
import {  MatDialogModule} from '@angular/material/dialog';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { HeaderComponent } from './Components/header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule,
    AngularFontAwesomeModule
  ],
  entryComponents: [LoginComponent,RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
