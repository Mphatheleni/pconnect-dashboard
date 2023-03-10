import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CheckinsComponent } from './checkins.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Checkin Management',
    },
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'checkIn',
      },
      {
        path: 'checkIn',
        component: CheckinsComponent,
        data: {
          title: 'CheckIn',
        },
      },
      // {
      //   path: 'all-organizations',
      //   component: AllOrganizationsComponent,
      //   data: {
      //     title: 'Organizations-view',
      //   },
      // },
    ],
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CheckinsRoutingModule { }
