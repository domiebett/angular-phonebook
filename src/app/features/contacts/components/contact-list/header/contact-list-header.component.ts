import { ChangeDetectionStrategy, Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-list-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, FormsModule],
  templateUrl: './contact-list-header.component.html',
  styleUrl: './contact-list-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListHeaderComponent {
  @Output() onSearch = new EventEmitter<string>();

  searchTerm: string = '';
  
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;

  handleSearch() {
    this.onSearch.emit(this.searchTerm);
  }
}
