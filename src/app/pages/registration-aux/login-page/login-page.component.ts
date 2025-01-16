import { Component } from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {SidebarComponent} from '../../../common/sidebar/sidebar.component';
import {Auth,signInWithPopup,GoogleAuthProvider} from '@angular/fire/auth';



@Component({
  selector: 'app-login',
  templateUrl: './login-page.component.html',
  imports: [
    SidebarComponent,
    ReactiveFormsModule
  ],
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;

  constructor(private fb: FormBuilder,private auth: Auth) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }
  login() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(this.auth, provider)
      .then(result => console.log('User signed in:', result.user))
      .catch(err => console.error('Error signing in:', err));
  }
  submitLogin(): void {
    if (this.loginForm.valid) {
      const formData = { ...this.loginForm.value };
      console.log('User Login Data:', formData);

      alert('Login successful! (Placeholder functionality)');
      this.loginForm.reset();
    } else {
      alert('Please fill out all required fields correctly.');
    }
  }
}
