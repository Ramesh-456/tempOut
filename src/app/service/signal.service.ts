import { EventEmitter, Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SignalService {

  public close = new EventEmitter<any>();

  public sigValue = signal("hello");
  constructor() { }
}
