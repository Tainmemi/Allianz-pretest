import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { NzInputModule } from 'ng-zorro-antd/input';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzNotificationModule } from 'ng-zorro-antd/notification';
import { NzSkeletonModule } from 'ng-zorro-antd/skeleton';

@NgModule({
  declarations: [
    HomeComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NzInputModule,
    NzIconModule,
    NzListModule,
    NzNotificationModule,
    NzSkeletonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class HomeModule { }
