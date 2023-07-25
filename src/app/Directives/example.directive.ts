import { Directive, ElementRef, HostListener } from '@angular/core'

@Directive({
  selector: '[exampleDirective]',
})
export class ExampleDirective {
  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    console.log('Enter')
  }

  @HostListener('mouseleave') onMouseLeave() {
    console.log('Leave')
  }
}