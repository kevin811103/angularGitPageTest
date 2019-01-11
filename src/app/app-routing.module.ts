import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestPageComponent } from './test-page/test-page.component';
import { Test2Component } from './test2/test2.component';


const routes: Routes = [
  // { path: '', component: LoginComponent},
  // { path: 'home', component: HomeComponent}
  {
    path: '',
    component: TestPageComponent

  },
  {
    path: 'testpage',
    component: Test2Component

  },
  // {
  //   path: '/testpage',
  //   component: TestPageComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
