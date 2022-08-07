import { FormControl } from '@angular/forms';

export class Auth {
  id: string | null;
  name: string;
  phone: string;

  constructor(id: string | null, name: string, phone: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}

export interface IAuth {
  name: string;
  phone: string;
}

export interface IAuthForm {
  name: FormControl<string | null>;
  phone: FormControl<string | null>;
}
