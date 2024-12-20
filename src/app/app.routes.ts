import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'contacts',
    loadChildren: () =>
      import('./features/contacts/contacts-routing.module').then(
        (m) => m.ContactsRoutingModule
      ),
  },
  { path: '', redirectTo: '/contacts', pathMatch: 'full' },
];
