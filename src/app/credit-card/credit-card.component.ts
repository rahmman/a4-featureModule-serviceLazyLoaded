import { Component, OnInit } from '@angular/core';
import{CreditCardService} from'./credit-card.service'
@Component({
  selector: 'app-credit-card',
  templateUrl: './credit-card.component.html',
  styleUrls: ['./credit-card.component.css']
})
export class CreditCardComponent implements OnInit {
 creditCardNumber: string;
  constructor(private creditcardService: CreditCardService) { }

  ngOnInit() {
  this.creditCardNumber= this.creditcardService.getCreditCard();
  }

}
