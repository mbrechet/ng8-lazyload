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
        loadChildren: async () => {
          const { PaymentModule } = await import('./payment/payment.module');
          return PaymentModule;
        }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }
