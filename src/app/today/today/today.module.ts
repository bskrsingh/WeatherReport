import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { TodayRoutingModule } from './today-routing.module';
import { TodayComponent } from '../today.component'


@NgModule({
  declarations: [TodayComponent],
  imports: [
    CommonModule,FormsModule,
    TodayRoutingModule
  ]
})
export class TodayModule { }
