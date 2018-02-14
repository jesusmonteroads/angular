import { Directive, OnInit, ElementRef, Renderer2, Input} from '@angular/core';
@Directive({
  selector: '[resaltar]'
})

export class ResaltarTexto implements OnInit{
  constructor(private elRef: ElementRef, private renderer: Renderer2){}
  @Input('resaltar') nombre : string
  ngOnInit(){
    if(this.nombre == 'Goku'){
      this.renderer.setStyle(this.elRef.nativeElement, 'color', 'gray')
      this.renderer.setStyle(this.elRef.nativeElement, 'font-size', '25px')
    }
  }
}
