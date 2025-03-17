import { Component, inject } from '@angular/core';
import { CustomUserService } from '../service/custom-user.service';

@Component({
  selector: 'app-servcomp-two',
  templateUrl: './servcomp-two.component.html',
  styleUrls: ['./servcomp-two.component.css']
})
export class ServcompTwoComponent {

  service = inject(CustomUserService);
}
