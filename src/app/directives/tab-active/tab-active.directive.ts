import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[tab-active]',
})
export class TabActiveDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    const li = btn as Element;
    const m: any = document.querySelectorAll('.tab-title-item');
    m.forEach(x => {
      if (x.className.includes('tab-title-item-selected')) {
        x.classList.remove('tab-title-item-selected');
      }
    });
    li.classList.add('tab-title-item-selected');
  }
}
