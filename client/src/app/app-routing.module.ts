import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewAddressComponent } from './components/new-address/new-address.component';
import { UpdateAddressComponent } from './components/update-address/update-address.component';
import { AddressesListComponent } from './components/addresses-list/addresses-list.component';
const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'addresses-list' },
  { path: 'new-address', component: NewAddressComponent },
  { path: 'update-address/:id', component: UpdateAddressComponent },
  { path: 'addresses-list', component: AddressesListComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
