import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { UserAccountComponent } from './user-account/user-account.component';
import { PrimaryTransactionComponent } from './primary-transaction/primary-transaction.component';
import { SavingsTransactionComponent } from './savings-transaction/savings-transaction.component';
import { AppointmentComponent } from './appointment/appointment.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full'
  },
  {
  	path: 'login',
  	component: LoginComponent
  },
  {
  	path: 'userAccount',
  	component: UserAccountComponent
  },
  {
    path: 'primaryTransaction/:username',
    component: PrimaryTransactionComponent
  },
  {
    path: 'savingsTransaction/:username',
    component: SavingsTransactionComponent
  },
  {
    path: 'appointment',
    component: AppointmentComponent
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}