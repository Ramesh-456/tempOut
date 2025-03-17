import { Component, Input, inject } from '@angular/core';
import { CustomUserService } from '../service/custom-user.service';

@Component({
  selector: 'app-servcomp-one',
  templateUrl: './servcomp-one.component.html',
  styleUrls: ['./servcomp-one.component.css'],
  providers:[CustomUserService]
})
export class ServcompOneComponent {
  service = inject(CustomUserService)

  // constructor(public service:CustomUserService){

  // }
  @Input() data!:any[];
  change(){
    this.service.value = "Changed"
  }
}
