import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CardOpenCloseService } from '../card-open-close.service';

@Component({
  selector: 'card-content',
  templateUrl: `./card-content.component.html`,
  styleUrls: ['./card-content.component.css'],
})
export class CardContentComponent {
   constructor(public cardService: CardOpenCloseService){
      
    }
 }
