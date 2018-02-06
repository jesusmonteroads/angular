import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 a = 5;
 b = 10;
 listo = false;

constructor (){
  setTimeout( () => {
    this.a = 10;
  },3000)
}
dragonball = [
  {plan: 'gratis', distancia: 1, active: true, nombre: 'Vegeta'},
  {plan: 'pagado', distancia: 2, active: true, nombre: 'Goku'},
  {plan: 'pagado', distancia: 3, active: false, nombre: 'Jesus'},
  {plan: 'pagado', distancia: 4, active: true, nombre: 'Montero'}
]

lat: number = 51.678418;
lng: number = 7.809007;

}
