import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TodayComponent } from '../today.component'

const routes: Routes = [
  {
    path : '',
    component : TodayComponent,
  },
  {
    path : 'today',
    component : TodayComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodayRoutingModule { }
