import { AccountComponent } from './views/account/account.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    component: AccountComponent,
    children: [
      { path: '', redirectTo: 'payment', pathMatch: 'full' },
      { path: '**', redirectTo: 'payment' },
      {
        path: 'payment',
        loadChildren: () => import('./payment/payment.module').then(m => m.PaymentModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
