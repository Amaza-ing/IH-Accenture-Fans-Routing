import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidatorComponent } from '../custom-validator/custom-validator.component';

@Component({
  selector: 'app-reactive-driven-form',
  templateUrl: './reactive-driven-form.component.html',
  styleUrls: ['./reactive-driven-form.component.css'],
})
export class ReactiveDrivenFormComponent {
  roles: string[];

  registerForm: FormGroup;
  nameInput: FormControl;
  ageInput: FormControl;
  emailInput: FormControl;
  passwordInput: FormControl;
  roleInput: FormControl;

  constructor() {
    this.roles = ['admin', 'user', 'operator'];

    this.nameInput = new FormControl('', [
      Validators.required,
      CustomValidatorComponent.noPepito,
    ]);
    this.ageInput = new FormControl('', [
      Validators.required,
      CustomValidatorComponent.validAge(10, 50),
    ]);
    this.emailInput = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
    this.passwordInput = new FormControl('', [
      Validators.required,
      Validators.minLength(6),
    ]);
    this.roleInput = new FormControl('', Validators.required);

    this.registerForm = new FormGroup({
      name: this.nameInput,
      age: this.ageInput,
      email: this.emailInput,
      password: this.passwordInput,
      role: this.roleInput,
    });
  }

  onSubmit(): void {
    console.log('User created...');
    console.log(this.nameInput.value);
  }
}
