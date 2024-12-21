import { Injectable } from '@angular/core';
import {
  BehaviorSubject,
  catchError,
  delay,
  Observable,
  of,
  Subject,
  take,
  tap,
} from 'rxjs';
import { IContact } from '../models/contacts';
import { DataService } from 'src/app/temp/data.service';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private _contacts: BehaviorSubject<IContact[]> = new BehaviorSubject<IContact[]>([]);
  private _isFetching: Subject<boolean> = new Subject<boolean>();
  private _isSubmitting: Subject<boolean> = new Subject<boolean>();

  public contacts$: Observable<IContact[]> = this._contacts.asObservable();
  public isFetching$: Observable<boolean> = this._isFetching.asObservable();
  public isSubmitting$: Observable<boolean> = this._isSubmitting.asObservable();

  constructor(private dataService: DataService) {
    this.getContacts();
  }

  getContacts(options: IContactOptions = {}) {
    this._isFetching.next(!options.disableLoading);

    this.dataService.getContacts().pipe(
      take(1),
      catchError((error) => {console.error(error);return of([]);})
    ).subscribe((contacts) => {
      this._contacts.next(contacts);
      this._isFetching.next(false);
    });
  }

  getContact(contactId: string): Observable<IContact> {
    return this.dataService.getContact(contactId);
  }

  addContact(contact: IContact): void {
    this._isSubmitting.next(true);
    // give users a smoother experience, add contact while it is being sent to the backend.
    this._contacts.next([...this._contacts.value, {...contact, isSubmitting: true}]);

    this.dataService.addContact(contact).pipe(
      delay(2000),
      take(1),
      tap(() => this.getContacts())
    ).subscribe(() => this._isSubmitting.next(false));
  }

  updateContact(contact: IContact): void {
    this._isSubmitting.next(true);
    // give users a smoother experience. Update contact before sending it to the backend.
    this._contacts.next(this._contacts.value.map((c) => {
      return contact.id === c.id ? {...contact, isSubmitting: true} : c;
    }));

    this.dataService.updateContact(contact).pipe(
      take(1),
      catchError((e) => {console.error(e); return of(null)}),
      tap(() => this.getContacts())
    ).subscribe(() => this._isSubmitting.next(false));
  }

  deleteContact(contact: IContact): void {
    this._contacts.next(this._contacts.value.filter((c) => c.id !== contact.id));

    (contact && contact.id
      ? this.dataService.deleteContact(contact.id).pipe(
        take(1),  
        catchError((err) => {console.error(err);return of(null);
          }),
          tap(() =>this.getContacts())
        )
      : of(null)).subscribe(() => {});
  }
}

interface IContactOptions {
  disableLoading?: boolean;
}
