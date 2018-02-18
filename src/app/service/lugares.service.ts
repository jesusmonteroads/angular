import { Injectable } from '@angular/core';

@Injectable()

export class LugaresService {

  peleadores = [
      {id: 1, nombre: 'Goku', poder: 'Camehame ha', descripcion: 'Esto ee un gran lugar para pelear', active: true},
      {id: 2, nombre: 'Gohan', poder: 'Camehame ha', descripcion: 'Esto ee un gran lugar para pelear', active: true},
      {id: 3, nombre: 'Vegeta', poder: 'no se que final', descripcion: 'Esto ee un gran lugar para pelear', active: true},
      {id: 4, active: false, nombre: 'Chucho', poder: 'Dios', descripcion: 'Esto ee un gran lugar para pelear'}
  ]

  public getPeleadores(){
    return this.peleadores
  }

  public buscarLugar(id){
    return this.peleadores.filter((gradon) => {
      return gradon.id == id
    })[0] || null
  }

  constructor() { }

}
