import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})

export class DetalleComponent {
  peleadores = [
    {id: 1, nombre: 'Goku', poder: 'Camehame ha', descripcion: 'Esto ee un gran lugar para pelear'},
    {id: 2, nombre: 'Gohan', poder: 'Camehame ha', descripcion: 'Esto ee un gran lugar para pelear'},
    {id: 3, nombre: 'Vegeta', poder: 'no se que final', descripcion: 'Esto ee un gran lugar para pelear'},
    {id: 4, nombre: 'Chucho', poder: 'Dios', descripcion: 'Esto ee un gran lugar para pelear'}
  ]

  id = null;
  dragon = {};
  constructor(private route: ActivatedRoute){
    this.id = this.route.snapshot.params['id'];
    this.dragon = this.buscarLugar()
  }

  buscarLugar(){
    return this.peleadores.filter((gradon) => {
      return gradon.id == this.id
    })[0] || null
  }
}
