import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { Router, RouterModule } from '@angular/router';
import { IContact } from '../../models/contacts';
import { ContactService } from '../../services/contact.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-add-contact',
  standalone: true,
  imports: [FontAwesomeModule, ContactFormComponent, RouterModule],
  templateUrl: './add-contact.component.html',
  styleUrl: './add-contact.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddContactComponent {
  faArrowLeft = faArrowLeft;

  isSubmitting: boolean = false;
  resetForm$: Subject<any> = new Subject();

  constructor(private contactService: ContactService, private router: Router) {}
  
  addContact(contact: IContact) {
    this.isSubmitting = true;
    this.contactService.addContact(contact).subscribe((newContact) => {
      this.isSubmitting = false;
      this.resetForm$.next(true);
      this.router.navigate(['/contacts']);
    });
  }
}
