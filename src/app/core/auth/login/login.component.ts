import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { IAuth } from '../../../models/auth.model';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  formLogin: FormGroup<IAuth>;

  constructor(private _fb: FormBuilder) {
    this.formLogin = this._fb.group<IAuth>({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
    });
  }

  submit() {
    console.log(this.formLogin.value);
  }
}
