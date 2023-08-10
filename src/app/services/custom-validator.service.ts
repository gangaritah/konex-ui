import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {

  constructor() { }

  validatorBirthDate(control: FormControl) {
    const birthdate = new Date(control.value);
    const now = new Date();
    const dateLimit = new Date(now.getFullYear() - 5, now.getMonth(), now.getDate());
    if ( birthdate < dateLimit) {      
      return null;
    }
    return { invalidBirthDate: true }
  }


}
