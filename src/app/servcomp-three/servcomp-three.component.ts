import { Component } from '@angular/core';
import { CustomUserService } from '../service/custom-user.service';

@Component({
  selector: 'app-servcomp-three',
  templateUrl: './servcomp-three.component.html',
  styleUrls: ['./servcomp-three.component.css']
})
export class ServcompThreeComponent {
  constructor(public service:CustomUserService){
    
  }

}
