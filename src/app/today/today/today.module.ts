import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodayRoutingModule } from './today-routing.module';
import { TodayComponent } from '../today.component'


@NgModule({
  declarations: [TodayComponent],
  imports: [
    CommonModule,
    TodayRoutingModule
  ]
})
export class TodayModule { }
