import {Directive, HostListener , HostBinding} from '@angular/core'
@Directive({
  selector: 'li[contar]'
})

export class ContadorClick{
  clickN = 0;
  @HostBinding('style.opacity') opaco = .1;
  @HostListener('click') onClick(){
    console.log(this.clickN++)
    this.opaco += .5
  }
}
