import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegexService {

  public onlyNumbers: string | RegExp = new RegExp('^[0-9]*$');

  constructor() { }
}
