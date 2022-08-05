import { FormControl } from '@angular/forms';

export class Auth {
  id: string;
  name: string;
  phone: string;

  constructor(id: string, name: string, phone: string) {
    this.id = id;
    this.name = name;
    this.phone = phone;
  }
}

export interface IAuth {
  name: FormControl<string | null>;
  phone: FormControl<string | null>;
}
