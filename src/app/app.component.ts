import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  a = 10;
  b = 5;
  btn = false;

  peleadores = [
    {nombre: 'Goku', poder: true},
    {nombre: 'Gohan', poder: true},
    {nombre: 'Vegeta', poder: true},
    {nombre: 'Chucho', poder: false}
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
