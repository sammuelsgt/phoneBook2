import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddContactComponent } from './components/add-contact/add-contact.component';
import { EditContactComponent } from './components/edit-contact/edit-contact.component';
import { PhoneBookComponent } from './components/phone-book/phone-book.component';


const routes: Routes = [
  {path: 'edit/:id', component: EditContactComponent},
  {path: '', component: PhoneBookComponent},
  {path: 'add', component: AddContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
