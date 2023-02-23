import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { InfoComponent } from './info/info.component';
import { SignupComponent } from './signup/signup.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { AuthGuard } from './guards/auth.guard';





@NgModule({

  declarations: [
    AppComponent,
    LoginComponent,
    InfoComponent,
    SignupComponent,
    NotFoundComponent,
    
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
    
    
  ],
  
  providers: [AuthService,AuthGuard],
  bootstrap: [AppComponent]
})


export class AppModule { }
