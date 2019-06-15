import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'keyword',
})
export class KeywordPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(val: string, keyword: string): any {
    const Reg = new RegExp(keyword, 'i');
    if (val) {
      const res = val.replace(Reg, `<a style="color: #2f9de2;">${keyword}</a>`);
      return this.sanitizer.bypassSecurityTrustHtml(res);
    }
  }
}
