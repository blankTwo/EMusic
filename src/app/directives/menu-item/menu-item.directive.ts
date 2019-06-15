import { Directive, HostListener, SimpleChanges, ElementRef } from '@angular/core';

@Directive({
  selector: '[menu-item]',
})
export class MenuItemDirective {
  constructor(private el: ElementRef) {}

  @HostListener('click', ['$event.target'])
  onClick(btn) {
    const li = btn as Element;
    const m: any = document.querySelectorAll('.menu-i');
    m.forEach(x => {
      if (x.className.includes('menuISelect')) {
        x.classList.remove('menuISelect');
      }
    });
    li.classList.add('menuISelect');
  }
}
