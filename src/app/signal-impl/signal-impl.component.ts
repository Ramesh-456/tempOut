import { Component, effect, inject } from '@angular/core';
import { SignalService } from '../service/signal.service';
import { interval } from 'rxjs';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'signal-impl',
  templateUrl: './signal-impl.component.html',
  styleUrls: ['./signal-impl.component.css'],
  providers:[]
})
export class SignalImplComponent {
  constructor(public ss:SignalService){
effect(()=>{
  // console.log(this.counter());
  
})
  }
  value:any
  // counterObservable = interval(1000)
  // counter = toSignal(this.counterObservable);
// signalService = inject(SignalService);
Submit(){
  this.ss.sigValue.set(this.value)
}
}
