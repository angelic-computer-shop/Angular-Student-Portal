import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
  {path : '',redirectTo: '/landing', pathMatch: 'full'},
  {path : 'landing', component: LandingComponent},
{path : 'profile/:ref',component:ProfileComponent}



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
