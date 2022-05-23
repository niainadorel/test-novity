import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { AccountLoadingRequested, AccountLoginRequested, loginRequired } from 'src/app/@core/store/account-manager/account-manager.actions';
import { selectAccountError, selectAccountLoading } from 'src/app/@core/store/account-manager/account-manager.selectors';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  showPassword = false;
  loginForm: FormGroup;

  loginError?: string = '';
  loginLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private store: Store
  ) {
    this.loginForm = this.formBuilder.group({
      email: [null, Validators.compose([Validators.required, Validators.email])],
      password: [null, Validators.required],
    });

    this.store.select(selectAccountLoading).subscribe(value => {
      this.loginLoading = value;
    })
    this.store.select(selectAccountError).subscribe(value => {
      console.log('Error', value)
      this.loginError = value;
    })
  }

  ngOnInit(): void {
  }

  get f(): {[key: string]: AbstractControl} {
    return this.loginForm.controls;
  }

  submitForm(): void {
    this.store.dispatch(AccountLoadingRequested());
    setTimeout(() => {
      this.store.dispatch(AccountLoginRequested({email: this.loginForm.value.email, password: this.loginForm.value.password}))
    }, 2000);
  }
}
