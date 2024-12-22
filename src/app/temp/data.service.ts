import { Injectable } from '@angular/core';

import { Observable, of, throwError } from 'rxjs';
import { ContactFilterOptions, IContact } from '../features/contacts/models/contacts';

const contacts: IContact[] = [
  {
    "id": "48e45e4f-21cd-452d-b88c-b6e15ed9d125",
    "firstName": "Regina",
    "lastName": "Saunders",
    "email": "pjohnson@yahoo.com",
    "address": "99952 Jason Shore Suite 078, Davisborough, NE 44229",
    "favorite": false,
    "group": "work",
    "image": "https://placekitten.com/493/841",
    "lastViewed": new Date("2024-09-12 20:27:26"),
    "phone": "0438962657",
    "deleted": false
  },
  {
    "id": "280b4251-bf99-42cb-92e3-6dcc9eb0da9a",
    "firstName": "Tiffany",
    "lastName": "Smith",
    "email": "tammy59@anderson.com",
    "address": "130 Johnathan Stream, West Aaron, NC 15895",
    "favorite": false,
    "group": "family",
    "image": "https://placeimg.com/1009/958/any",
    "lastViewed": new Date("2024-04-05 09:50:43"),
    "phone": "1078674216",
    "deleted": false
  },
  {
    "id": "f9ac45d7-843e-41d9-9816-6e4c7d9f2974",
    "firstName": "Selena",
    "lastName": "Johnson",
    "email": "dustingreer@bowman.com",
    "address": "390 Jessica Tunnel, Gordonfurt, NE 15135",
    "favorite": false,
    "group": "work",
    "image": "https://placekitten.com/31/976",
    "lastViewed": new Date("2024-02-06 01:18:33"),
    "phone": "4390883367",
    "deleted": false
  },
  {
    "id": "407c658d-6d1d-4f39-babe-dec917d74454",
    "firstName": "Joe",
    "lastName": "Sanchez",
    "email": "curtisrodney@clark-jones.biz",
    "address": "7730 Williams Drive Apt. 430, Port Diana, SC 19001",
    "favorite": true,
    "group": "others",
    "image": "https://placeimg.com/641/945/any",
    "lastViewed": new Date("2024-10-05 19:53:08"),
    "phone": "7822923208",
    "deleted": false
  },
  {
    "id": "c353f5fc-4b61-4b72-8031-612f70b27483",
    "firstName": "Jodi",
    "lastName": "Chen",
    "email": "austinbrandon@beard-davis.biz",
    "address": "83301 Manning Turnpike, South Donald, VA 32440",
    "favorite": true,
    "group": "family",
    "image": "https://placekitten.com/652/959",
    "lastViewed": new Date("2024-11-12 06:55:25"),
    "phone": "1290300649",
    "deleted": false
  },
  {
    "id": "482d0c61-580d-41b7-abc1-06e6671da1f8",
    "firstName": "David",
    "lastName": "Jackson",
    "email": "jonesevan@baker-miller.com",
    "address": "0983 Middleton Ridge, Lake Lisa, MN 33576",
    "favorite": true,
    "group": "friends",
    "image": "https://placekitten.com/480/198",
    "lastViewed": new Date("2024-01-27 13:13:14"),
    "phone": "3259467162",
    "deleted": true
  },
  {
    "id": "9870f425-5180-472b-88ee-e825fe2ec9da",
    "firstName": "Christian",
    "lastName": "Chavez",
    "email": "gabriellelove@sexton.org",
    "address": "89977 Richmond Bridge, Mooretown, AK 61008",
    "favorite": true,
    "group": "work",
    "image": "https://placeimg.com/854/987/any",
    "lastViewed": new Date("2024-08-22 15:25:33"),
    "phone": "6676511728",
    "deleted": false
  },
  {
    "id": "022ce310-5f36-43d9-88ce-7a79fdf4840a",
    "firstName": "Michael",
    "lastName": "Ortiz",
    "email": "perkinscalvin@hernandez.com",
    "address": "379 Elijah Cliff, Stevenchester, IL 38579",
    "favorite": true,
    "group": "family",
    "image": "https://placeimg.com/792/260/any",
    "lastViewed": new Date("2024-04-19 01:15:05"),
    "phone": "1232615922",
    "deleted": true
  },
  {
    "id": "1281e665-705a-479b-bb89-1ee70ab742a2",
    "firstName": "Krystal",
    "lastName": "Le",
    "email": "nlong@johnson.com",
    "address": "666 Williams Knoll Apt. 178, Whitneyland, IN 01173",
    "favorite": false,
    "group": "work",
    "image": "https://placekitten.com/968/812",
    "lastViewed": new Date("2024-08-01 02:40:31"),
    "phone": "7708173539",
    "deleted": false
  },
  {
    "id": "dd65654d-0b12-4ecc-8054-145f8acefd3a",
    "firstName": "Meghan",
    "lastName": "Kelly",
    "email": "phamrichard@gmail.com",
    "address": "7430 Jared Neck Suite 384, Brianville, MI 94738",
    "favorite": true,
    "group": "others",
    "image": "https://placeimg.com/432/981/any",
    "lastViewed": new Date("2024-11-21 21:53:12"),
    "phone": "4883397840",
    "deleted": false
  },
  {
    "id": "7ae4b861-0edb-4aa5-aecf-db7c8156fd19",
    "firstName": "Theresa",
    "lastName": "Nelson",
    "email": "savagelaura@hotmail.com",
    "address": "USS Henry, FPO AA 35939",
    "favorite": true,
    "group": "family",
    "image": "https://dummyimage.com/923x272",
    "lastViewed": new Date("2024-04-09 13:10:29"),
    "phone": "9636669492",
    "deleted": false
  },
  {
    "id": "e58cc5b9-e0c4-4cd6-bd7a-5f3b50d9384c",
    "firstName": "Kelli",
    "lastName": "Yang",
    "email": "riversvanessa@young-ortiz.com",
    "address": "81003 Carter Prairie Suite 274, West Omar, MN 01047",
    "favorite": true,
    "group": "family",
    "image": "https://placeimg.com/164/247/any",
    "lastViewed": new Date("2024-02-14 06:40:13"),
    "phone": "9042875464",
    "deleted": false
  },
  {
    "id": "9169c309-7cff-4af4-93fe-4e7305be9680",
    "firstName": "Michael",
    "lastName": "Garcia",
    "email": "hparker@fitzgerald.info",
    "address": "89479 Edgar Ridges, Hansenborough, CO 25597",
    "favorite": false,
    "group": "others",
    "image": "https://dummyimage.com/175x652",
    "lastViewed": new Date("2024-02-28 06:28:14"),
    "phone": "8094942888",
    "deleted": false
  }
]

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor() {}

  getContacts(filterOptions: ContactFilterOptions = {}): Observable<IContact[]> {
    const filterCallbacks = this.createFilters(filterOptions);
    return of(this.filterContacts([...contacts], filterCallbacks));
  }

  getContact(contactId: string): Observable<IContact> {
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

  deleteContacts(contactIds: string[]): Observable<null> {
    contacts.forEach((contact) => {
      if (contact.id && contactIds.includes(contact.id)) {
        contact['deleted'] = true;
      }
    });
    
    return of(null);
  }

  private filterContacts(contacts: IContact[], filters: ContactFilter[]): IContact[] {
    return contacts.filter((contact) => {
      return filters.every((filter) => filter(contact))
    });
  }

  private createFilters(filterOptions: ContactFilterOptions = {}) {
    const filters: ContactFilter[] = [];

    if (filterOptions.searchTerm && filterOptions.searchTerm.trim()) {
      const lowerCaseSearchTerm = filterOptions.searchTerm.toLowerCase();
      filters.push((contact: IContact) => (
        contact.firstName.toLowerCase().includes(lowerCaseSearchTerm) ||
        contact.lastName.toLowerCase().includes(lowerCaseSearchTerm) ||
        contact.email.toLowerCase().includes(lowerCaseSearchTerm) ||
        contact.phone.toLowerCase().includes(lowerCaseSearchTerm)
      ));
    }

    if (filterOptions.showDeleted) {
      filters.push(() => true);
    } else {
      filters.push((contact: IContact) => !contact.deleted);
    }

    return filters;
  }

  private generateRandomId() {
    return (
      'id-' +
      Date.now().toString(36) +
      Math.random().toString(36).substring(2, 10)
    );
  }
}

type ContactFilter = ((contact: IContact) => boolean);
