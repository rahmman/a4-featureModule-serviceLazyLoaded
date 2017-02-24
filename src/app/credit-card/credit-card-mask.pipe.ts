import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'creditCardMask'
})
export class CreditCardMaskPipe implements PipeTransform {

  transform(creditCardDisplay: string): string {
    let hideSection= creditCardDisplay.slice(0,-6);
    let displayedSection= creditCardDisplay.slice(-6);

    return hideSection.replace(/./g, '*').concat(displayedSection);
  }

}
