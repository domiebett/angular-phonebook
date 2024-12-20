import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IContact } from '../../models/contacts';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTrash, faPhone } from '@fortawesome/free-solid-svg-icons';

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

  faTrash = faTrash;
  faPhone = faPhone;
}
