import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';

import { IAuthForm } from '@models/auth.model';
import { UserService } from '@services/user.service';

@Component({
  standalone: true,
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  imports: [ReactiveFormsModule],
})
export class LoginComponent {
  formLogin: FormGroup<IAuthForm>;

  constructor(
    private _fb: FormBuilder,
    private _userService: UserService,
    private _router: Router
  ) {
    this.formLogin = this._fb.group<IAuthForm>({
      name: new FormControl(null, Validators.required),
      phone: new FormControl(null, Validators.required),
    });
  }

  submit() {
    // console.log(this.formLogin.value);

    if (this.formLogin.invalid) return;

    let { name, phone } = this.formLogin.value;

    name = name ?? '';
    phone = phone ?? '';

    this._userService.addUser({
      name,
      phone,
    });

    this._router.navigate(['/']);
  }
}
