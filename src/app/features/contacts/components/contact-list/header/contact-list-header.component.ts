import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMagnifyingGlass, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-contact-list-header',
  standalone: true,
  imports: [FontAwesomeModule, RouterModule, FormsModule],
  templateUrl: './contact-list-header.component.html',
  styleUrl: './contact-list-header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ContactListHeaderComponent {
  @Input() showDelete: boolean = false;

  @Output() onSearch = new EventEmitter<string>();
  @Output() onDeleteAll = new EventEmitter();

  searchTerm: string = '';
  
  faMagnifyingGlass = faMagnifyingGlass;
  faPlus = faPlus;
  faTrash = faTrash;

  handleSearch() {
    this.onSearch.emit(this.searchTerm);
  }

  handleDeleteAll() {
    this.onDeleteAll.emit();
  }
}
