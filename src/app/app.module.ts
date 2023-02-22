import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing/app-routing.module';





@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    InfoComponent,
    SignupComponent,
    
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
    
  ],
  
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }
