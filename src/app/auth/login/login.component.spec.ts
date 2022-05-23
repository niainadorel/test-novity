import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { StoreModule } from '@ngrx/store';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginComponent ],
      imports: [FormsModule, StoreModule.forRoot({}), ReactiveFormsModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display Log In to Dashboard', () => {
    let title = fixture.debugElement.query(By.css('#login-title'));
    expect(title.nativeElement.innerText).toBe('Log In to Dashboard');
  })

  it('Should show email error', () => {
    component.loginForm.controls['email'].setValue('invalidmail');
    component.loginForm.controls['email'].markAsTouched();
    fixture.detectChanges();
    const emailError = fixture.debugElement.query(By.css('#email-error'))
    expect(emailError).toBeTruthy();
  });

  it('Should show email required', () => {
    component.loginForm.controls['email'].setValue(null);
    component.loginForm.controls['email'].markAsTouched();
    fixture.detectChanges();
    const emailError = fixture.debugElement.query(By.css('#email-required-error'))
    expect(emailError).toBeTruthy();
  });


  it('Should show password required', () => {
    component.loginForm.controls['password'].setValue(null);
    component.loginForm.controls['password'].markAsTouched();
    fixture.detectChanges();
    const emailError = fixture.debugElement.query(By.css('#password-required-error'))
    expect(emailError).toBeTruthy();
  });

});
