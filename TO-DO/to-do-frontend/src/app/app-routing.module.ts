import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToDoFormComponent } from './to-do-form/to-do-form.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'app-to-do-form',
    pathMatch: 'full'
  },
  {
    path: 'app-to-do-form',
    component: ToDoFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
