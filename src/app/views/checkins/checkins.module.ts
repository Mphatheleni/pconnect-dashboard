import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckinsRoutingModule } from './checkins-routing.module';
import { CheckinsComponent } from './checkins.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table'
import { MatInputModule } from '@angular/material/input';
import { MatTableExporterModule } from 'mat-table-exporter';

import {
  AvatarModule,
  ButtonGroupModule,
  ButtonModule,
  CardModule,
  FormModule,
  GridModule,
  NavModule,
  ProgressModule,
  TableModule,
  TabsModule
} from '@coreui/angular';
import { CalloutModule } from '@coreui/angular';

@NgModule({
  declarations: [
    CheckinsComponent
  ],
  imports: [
    CommonModule,
    CheckinsRoutingModule,
    CardModule,
    AvatarModule,
    TableModule,
    MatTableModule,
    ProgressModule,
    MatPaginatorModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableExporterModule,
    CalloutModule
  ]
})
export class CheckinsModule {



 }
