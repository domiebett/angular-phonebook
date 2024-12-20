import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';
import { ContactListHeaderComponent } from '../contact-list-header/contact-list-header.component';
import { ContactListBodyComponent } from '../contact-list-body/contact-list-body.component';
import { ContactService } from '../../services/contact.service';
import { IContact } from '../../models/contacts';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-list',
  standalone: true,
  imports: [CommonModule, FontAwesomeModule, ContactListHeaderComponent, ContactListBodyComponent],
  templateUrl: './contact-list.component.html',
  styleUrl: './contact-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;

  contacts$!: Observable<IContact[]>;

  constructor(private contactService: ContactService) {
    this.contacts$ = this.contactService.contacts$;
  }
}
