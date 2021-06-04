import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FutureComponent } from '../future.component'

const routes: Routes = [
  {
    path : 'future/:name',
    component : FutureComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FutureRoutingModule { }
