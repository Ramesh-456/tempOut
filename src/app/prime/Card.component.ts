import { Component, Input, TemplateRef, ViewEncapsulation, type OnInit } from '@angular/core';
import { CardOpenCloseService } from './card-open-close.service';

@Component({
  selector: 'card',
  templateUrl: './Card.component.html',
  viewProviders:[CardOpenCloseService]
})
export class CardComponent implements OnInit {
  constructor(public cardService: CardOpenCloseService){

  }
@Input()  cardContent !:TemplateRef<any>
  ngOnInit(): void { }

}
