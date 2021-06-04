import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path : '',
    loadChildren: () => import(`./today/today/today.module`)
    .then(mod => mod.TodayModule)
    
  },
  {
    path : 'today',
    loadChildren: () => import(`./today/today/today.module`)
    .then(mod => mod.TodayModule)
    
  },
  {
    path : '',
    loadChildren: () => import(`./future/future/future.module`)
    .then(mod => mod.FutureModule)
    
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
