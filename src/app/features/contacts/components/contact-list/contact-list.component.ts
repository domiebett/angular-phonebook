import { ChangeDetectionStrategy, Component, OnDestroy } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ContactListHeaderComponent } from './header/contact-list-header.component';
import { ContactListBodyComponent } from './body/contact-list-body.component';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../models/contacts';
import { Observable, Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [
    CommonModule,
    FontAwesomeModule,
    ContactListHeaderComponent,
    ContactListBodyComponent,
  ],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;

  contacts$!: Observable<IContact[]>;

  constructor(private contactService: ContactService) {
    this.contacts$ = this.contactService.contacts$;
  }

  filterContacts(searchTerm: string) {
    this.contactService.getContacts({filters: {searchTerm: searchTerm}})
  }

  deleteContact(contact: IContact) {
    this.contactService.deleteContact(contact);
  }
}
