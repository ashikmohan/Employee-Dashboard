import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EmployeeFormComponent } from './employee-form/employee-form.component';
const routes: Routes = [{path:'home',component:HomeComponent},{path:'employeeform',component:EmployeeFormComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
