import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { IContact } from '../features/contacts/models/contacts';

const contacts: IContact[] = [
  {
    id: 'uieutieutiutr',
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    address: '1234 City, Country',
    favorite: true,
    group: 'family',
    image: 'http://google.com',
    lastViewed: new Date(),
    phone: '0711454545',
    deleted: false,
  },
  {
    id: 'uieutieutiuts',
    firstName: 'Jack',
    lastName: 'Doe',
    email: 'jackdoe@example.com',
    address: '1234 City, Country',
    favorite: true,
    group: 'family',
    image: 'http://google.com',
    lastViewed: new Date(),
    phone: '0711454568',
    deleted: true,
  },
  {
    id: 'uieutieutiugh',
    firstName: 'Jane',
    lastName: 'Doe',
    email: 'janedoe@example.com',
    address: '1234 City, Country',
    favorite: true,
    group: 'family',
    image: 'http://google.com',
    lastViewed: new Date(),
    phone: '0711454522',
    deleted: false,
  },
];

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getContacts(): Observable<IContact[]> {
    return of(contacts.filter((contact) => !contact.deleted));
  }

  getContact(contactId: string): Observable<IContact> {
    console.log('getting data');
    const contact = contacts.find((contact) => contact.id === contactId);

    if (!contact) {
      return throwError(() => ({ status: 404, message: 'Contact not found' }));
    }

    return of(contact);
  }

  addContact(contact: IContact): Observable<IContact> {
    contact['id'] = this.generateRandomId();
    contact['deleted'] = false;
    contact['lastViewed'] = new Date();
    contacts.push(contact);
    return of(contact);
  }

  updateContact(updatedContact: IContact): Observable<IContact> {
    const contactIndex = contacts.findIndex((contact) => contact.id === updatedContact.id)

    if (contactIndex === undefined) {
      return throwError(() => ({status: 404, message: 'Contact not found'}));
    }
    contacts.splice(contactIndex, 1, updatedContact);
    return of(contacts[contactIndex]);
  }

  deleteContact(contactId: string): Observable<null> {
    const contact = contacts.find((contact) => contact.id === contactId);
    if (!contact) {
      return throwError(() => ({ status: 404, message: 'Contact not found' }));
    }

    contact['deleted'] = true;
    return of(null);
  }

  private generateRandomId() {
    return (
      'id-' +
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 10)
    );
  }
}
