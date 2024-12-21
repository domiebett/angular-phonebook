import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact } from '../../models/contacts';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss'
})
export class ContactFormComponent {
  @Input() contact: IContact | {} = {};

  @Output() onSubmit: EventEmitter<IContact> = new EventEmitter<IContact>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      address: [''],
      favorite: [false],
      group: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]]
    });
  }

  handleSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      return;
    }
    this.onSubmit.emit(this.form.value);
  }
}
