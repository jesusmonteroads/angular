import { Directive, HostListener, HostBinding } from '@angular/core'
@Directive({
  selector:'ul[escuchador]'
})

export class EscuchadorClick {
  clickO = 0;
  @HostBinding('style.opacity') opaco = 1;
  @HostListener('click') onClik(){
    // console.log(this.clickO++)
    // this.opaco += .1
  }
}
