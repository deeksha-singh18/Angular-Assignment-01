import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';
import { InfoComponent } from '../info/info.component';
import { NotFoundComponent } from '../not-found/not-found.component';
import { AuthGuard } from '../guards/auth.guard';

const routes : Routes=[
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {path:'login',component : LoginComponent},
  {path:'signup' , component: SignupComponent},
  {path:'info',component:InfoComponent,canActivate:[AuthGuard]},
  {path:'**',component:NotFoundComponent}

];



@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule]

})

export class AppRoutingModule { }
