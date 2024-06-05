import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
import { ProfileComponent } from './profile/profile.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  { path: 'profile', component: ProfileComponent },
  { path: 'Userdata', component: ToDoFormComponent }, 
  { path: 'contact', component: ContactComponent }, 


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
