import { Component } from '@angular/core';

@Component({
  selector: 'app-lugares',
  templateUrl: './lugares.component.html'
})
export class LugaresComponent {
  a = 10;
  b = 5;
  btn = false;

  peleadores = [
    {id: 1, nombre: 'Goku', poder: true},
    {id: 2, nombre: 'Gohan', poder: true},
    {id: 3, nombre: 'Vegeta', poder: true},
    {id: 4, nombre: 'Chucho', poder: false}
  ]

constructor(){
  setTimeout(()=>{
    this.btn = true;
  },5000)
}

alerta(){
  alert('Hola')
}

lat: number = 51.678418;
 lng: number = 7.809007;
}
