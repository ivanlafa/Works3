import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './Segunda-vista/components/navbar/navbar.component';


const routes: Routes = [
  { path: '2vista', component: NavbarComponent },
  { path: '', redirectTo: '/header', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
