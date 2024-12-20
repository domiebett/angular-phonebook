import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IContact } from '../models/contacts';

const testContacts: IContact[] = [
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
    phone: '0711454545'
  },
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
    phone: '0711454545'
  }
]

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  private _contacts: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([...testContacts]);
  public contacts$: Observable<IContact[]> = this._contacts.asObservable();

  constructor() { }

  getContacts() {

  }
}
