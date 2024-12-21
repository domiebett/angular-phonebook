import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact } from '../../../models/contacts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPhone } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list-body',
  standalone: true,
  imports: [FontAwesomeModule],
  templateUrl: './contact-list-body.component.html',
  styleUrl: './contact-list-body.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactListBodyComponent {
  @Input() contacts: IContact[] | null = [];

  @Output() onDelete = new EventEmitter<IContact>();

  faTrash = faTrash;
  faPhone = faPhone;

  constructor(private router: Router) {}

  viewContact(contact: IContact) {
    this.router.navigate(['contacts', contact.id]);
  }

  handleDelete(contact: IContact) {
    const confirmDelete = window.confirm('Are you sure you would like to delete the contact?');
    if (confirmDelete) {
      this.onDelete.emit(contact);
    }
  }
}
