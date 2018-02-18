import { Component } from '@angular/core';
import { LugaresService } from '../service/lugares.service';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  a = 10;
  b = 5;
  btn = false;

peleadores = null;
constructor(private lugaresService: LugaresService){
  this.peleadores = lugaresService.getPeleadores();
}

alerta(){
  alert('Hola')
}

 lat: number = 51.678418;
 lng: number = 7.809007;
 lugares = null;
}
