import { ChangeDetectionStrategy, Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { RouterModule } from '@angular/router';

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
}
