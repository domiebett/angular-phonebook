import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-list-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule],
  templateUrl: './contact-list-header.component.html',
  styleUrl: './contact-list-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListHeaderComponent {
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;
}
