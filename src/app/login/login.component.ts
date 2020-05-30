import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StorageUtils } from '../utils/storage.utils';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(
    private authService: AuthService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  validateForm!: FormGroup;

  ngOnInit(): void {
    this.validateForm = this.formBuilder.group({
      userName: [null, [Validators.required]],
      password: [null, [Validators.required]],
    });
  }

  submitForm(): void {
    const sessionType =
      this.validateForm.get('userName').value === 'admin' ? 'admin' : 'users';
    const url = sessionType === 'admin' ? 'users' : 'orders';

    StorageUtils.store('session', sessionType);
    this.authService.setSession(sessionType);
    this.router.navigateByUrl(url);
  }
}
