import { Injectable } from '@angular/core';

@Injectable({
  providedIn:'platform'
})
export class CustomUserService {
value = "custom user service"
  constructor() { }
}
