import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerHomeComponent } from './components/container-home/container-home.component';
import { ContainerCreateComponent } from './components/container-create/container-create.component';
import { ContainerMedicinesComponent } from './components/container-medicines/container-medicines.component';

const routes: Routes = [
 { path: "", component: ContainerHomeComponent },
 { path: "create", component: ContainerCreateComponent},
 { path: "medicinesview", component: ContainerMedicinesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
