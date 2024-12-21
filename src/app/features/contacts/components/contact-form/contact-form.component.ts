import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IContact } from '../../models/contacts';
import { ReactiveFormsModule, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styleUrl: './contact-form.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ContactFormComponent {
  @Input() contact: IContact | {} = {};

  @Output() onSubmit: EventEmitter<IContact> = new EventEmitter<IContact>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.email]],
      address: [''],
      favorite: [false],
      group: [''],
      phone: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
    });
  }

  handleSubmit() {
    if (this.form.invalid) {
      console.error('Form is invalid');
      this.form.markAllAsTouched();
      return;
    }
    this.onSubmit.emit(this.form.value);
    this.form.reset();
  }

  getControlClass(controlName: string): string {
    const control = this.form.get(controlName);
    return control?.invalid && control?.touched ? 'input-error' : '';
  }

  controlHasError(controlName: string, error?: string) {
    const control = this.form.get(controlName);
    // check if the control has error. if error is provided, then check for the specific error,
    // otherwise only check if it is invalid.
    return (
      control?.invalid &&
      control.touched &&
      (error ? control.hasError(error) : true)
    );
  }
}
