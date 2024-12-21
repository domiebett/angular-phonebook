import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  delay,
  Observable,
  of,
  Subject,
  tap,
} from 'rxjs';
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

  getContacts(options: IContactOptions = {}) {
    this._loading.next(!options.disableLoading);

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

  addContact(contact: IContact): Observable<IContact> {
    return this.dataService
      .addContact(contact)
      .pipe(
        tap((newContact) =>
          this._contacts.next([...this._contacts.value, newContact])
        )
      );
  }

  deleteContact(contact: IContact): Observable<null> {
    console.log(contact);
    return contact && contact.id
      ? this.dataService.deleteContact(contact.id).pipe(
          catchError((err) => {
            console.error(err);
            return of(null);
          }),
          tap(() =>
            this._contacts.next(
              this._contacts.value.filter((c) => c.id !== contact.id)
            )
          )
        )
      : of(null);
  }
}

interface IContactOptions {
  disableLoading?: boolean;
}
