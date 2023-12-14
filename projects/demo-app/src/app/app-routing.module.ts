import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';

const routes: Routes = [
  {
    path: 'page1',
    component: Page1Component,
    data: {
      name: 'Page1',
      reuseRoute: true,
      reuseFromComponents: ['Page2'],
    },
  },
  {
    path: 'page2',
    component: Page2Component,
    data: {
      name: 'Page2',
      reuseRoute: true,
      reuseFromComponents: ['Page1'],
    },
  },
  {
    path: '**',
    redirectTo: 'page1',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
