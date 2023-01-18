import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CryptosComponent, CryptoDetailsComponent} from './ui/components';

const routes: Routes = [
  { path: '', redirectTo: '/cryptos', pathMatch: 'full' },
  { path: 'cryptos', component: CryptosComponent },
  { path: 'cryptos/:cryptoCode', component: CryptoDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
