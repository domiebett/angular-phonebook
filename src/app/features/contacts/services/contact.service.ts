import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, of, Subject } from 'rxjs';
import { IContact } from '../models/contacts';
import { DataService } from 'src/app/temp/data.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private _contacts: BehaviorSubject<IContact[]> = new BehaviorSubject<
    IContact[]
  >([]);
  private _loading: Subject<boolean> = new Subject<boolean>();

  public contacts$: Observable<IContact[]> = this._contacts.asObservable();
  public loading$: Observable<boolean> = this._loading.asObservable();

  constructor(private dataService: DataService) {
    this.getContacts();
  }

  getContacts() {
    this._loading.next(true);

    this.dataService
      .getContacts()
      .pipe(
        catchError((error) => {
          console.error(error);
          return of([]);
        })
      )
      .subscribe((contacts) => {
        this._contacts.next(contacts);
        this._loading.next(false);
      });
  }

  addContact(contact: IContact): void {
    this.dataService
      .addContact(contact)
      .subscribe((contact: IContact) =>
        this._contacts.next([...this._contacts.value, contact])
      );
  }
}
