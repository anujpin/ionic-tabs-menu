import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViewAssignmentPageRoutingModule } from './view-assignment-routing.module';

import { ViewAssignmentPage } from './view-assignment.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViewAssignmentPageRoutingModule
  ],
  declarations: [ViewAssignmentPage]
})
export class ViewAssignmentPageModule {}
