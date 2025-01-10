import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SidebarComponent} from '../../../common/sidebar/sidebar.component';

@Component({
  selector: 'app-register',
  templateUrl: './register-page.component.html',
  imports: [
    SidebarComponent,
    ReactiveFormsModule
  ],
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent {
  registerForm: FormGroup;
  submittedUsers: any[] = []; // Placeholder for registered user data

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', [Validators.required, Validators.minLength(2)]],
      surname: ['', [Validators.required, Validators.minLength(2)]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;
    return password === confirmPassword ? null : { mismatch: true };
  }

  submitForm(): void {
    if (this.registerForm.valid) {
      const formData = { ...this.registerForm.value };
      delete formData.confirmPassword; // Remove confirmPassword before storing

      this.submittedUsers.push(formData); // Store locally
      console.log('Registered Users:', this.submittedUsers);

      alert('Registration successful! Data saved locally.');
      this.registerForm.reset();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
// export class RegisterPageComponent {
//   registerForm: FormGroup;
//
//   constructor(private fb: FormBuilder) {
//     this.registerForm = this.fb.group({
//       email: ['', [Validators.required, Validators.email]],
//       name: ['', [Validators.required, Validators.minLength(2)]],
//       surname: ['', [Validators.required, Validators.minLength(2)]],
//       password: ['', [Validators.required, Validators.minLength(6)]],
//       confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
//     }, { validators: this.passwordMatchValidator });
//   }
//
//   passwordMatchValidator(group: FormGroup): { [key: string]: boolean } | null {
//     const password = group.get('password')?.value;
//     const confirmPassword = group.get('confirmPassword')?.value;
//     return password === confirmPassword ? null : { mismatch: true };
//   }
//
//   submitForm(): void {
//     if (this.registerForm.valid) {
//       const formData = this.registerForm.value;
//       console.log('New Account Registration Data:', formData);
//       alert('Registration completed successfully!');
//       this.registerForm.reset();
//     } else {
//       alert('Please fill out all required fields correctly.');
//     }
//   }
// }
