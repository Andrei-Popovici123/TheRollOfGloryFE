import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';

import {SidebarComponent} from '../../common/sidebar/sidebar.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [
    ReactiveFormsModule, CommonModule,SidebarComponent
  ],
  templateUrl: './registration-form.component.html',
  styleUrl: './registration-form.component.scss'
})export class RegistrationFormComponent {
  registrationForm: FormGroup;
  submittedData: any[] = []; // Placeholder Awaiting backend implementation

  constructor(private fb: FormBuilder) {
    this.registrationForm = this.fb.group({
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      age: ['', [Validators.required, Validators.min(18)]],
      gender: ['', Validators.required],
      address: ['', [Validators.required, Validators.minLength(10)]],
      phoneNumber: ['', [Validators.required, Validators.pattern(/^\\+?[0-9]{7,15}$/)]],
      medicalDisclaimer: [false, Validators.requiredTrue],
      emergencyContactName: ['', [Validators.required, Validators.minLength(2)]],
      emergencyContactPhone: ['', [Validators.required, Validators.pattern(/^\\+?[0-9]{7,15}$/)]],
      consentToTerms: [false, Validators.requiredTrue],
    });
  }

  submitForm(): void {
    if (this.registrationForm.valid) {
      const formData = this.registrationForm.value;
      this.submittedData.push(formData); // Store data locally
      console.log('Registration Data:', formData);
      alert('Registration data saved locally!');
      this.registrationForm.reset();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
// export class RegistrationFormComponent {
//   registrationForm: FormGroup;
//
//   constructor(private fb: FormBuilder, private http: HttpClient) {
//     this.registrationForm = this.fb.group({
//       fullName: ['', [Validators.required, Validators.minLength(2)]],
//       age: ['', [Validators.required, Validators.min(18)]],
//       gender: ['', Validators.required],
//       address: ['', [Validators.required, Validators.minLength(10)]],
//       phoneNumber: ['', [Validators.required, Validators.pattern(/^\\+?[0-9]{7,15}$/)]],
//       medicalDisclaimer: [false, Validators.requiredTrue],
//       emergencyContactName: ['', [Validators.required, Validators.minLength(2)]],
//       emergencyContactPhone: ['', [Validators.required, Validators.pattern(/^\\+?[0-9]{7,15}$/)]],
//       consentToTerms: [false, Validators.requiredTrue],
//     });
//   }
//
//   submitForm(): void {
//     if (this.registrationForm.valid) {
//       const formData = this.registrationForm.value;
//       const apiUrl = 'https://example.com/api/register'; // Replace with actual backend API endpoint
//
//       this.http.post(apiUrl, formData).subscribe(
//         (response) => {
//           console.log('Registration successful:', response);
//           alert('Registration completed successfully!');
//           this.registrationForm.reset();
//         },
//         (error) => {
//           console.error('Error during registration:', error);
//           alert('Registration failed. Please try again later.');
//         }
//       );
//     } else {
//       alert('Please fill out all required fields correctly.');
//     }
//   }
// }
