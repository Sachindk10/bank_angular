import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  sData="service Data"

  constructor() { }

  checkData() {
    return "hello"
  }
}