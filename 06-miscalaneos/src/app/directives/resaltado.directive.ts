import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  constructor(private el:ElementRef) {

  }

  @Input("appResaltado") nuevoColor:string;

  @HostListener('mouseenter') entro(){
       this.resaltar(this.nuevoColor)
  }

  @HostListener('mouseleave') salio(){
       this.resaltar(null)
  }

  private resaltar(color:string = 'yellow'){
      this.el.nativeElement.style.backgroundColor=color;
  }

}
