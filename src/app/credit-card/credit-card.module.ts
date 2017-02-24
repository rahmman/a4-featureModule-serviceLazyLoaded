import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreditCardMaskPipe } from './credit-card-mask.pipe';
import{CreditCardComponent} from'./credit-card.component';
import{CreditCardService} from './credit-card.service'
@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [CreditCardComponent, CreditCardMaskPipe],
  exports: [CreditCardComponent]
})
export class CreditCardModule {
static forRoot(): ModuleWithProviders {
  return{
    ngModule: CreditCardModule,
    providers: [CreditCardService]
  }
}


  }
