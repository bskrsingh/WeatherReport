import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FutureRoutingModule } from './future-routing.module';
import { FutureComponent } from '../future.component'

@NgModule({
  declarations: [FutureComponent],
  imports: [
    CommonModule,
    FutureRoutingModule
  ]
})
export class FutureModule { }
