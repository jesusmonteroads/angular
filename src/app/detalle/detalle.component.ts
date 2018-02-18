import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LugaresService } from '../service/lugares.service';


@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html'
})

export class DetalleComponent {


  id = null;
  dragon = {};
  constructor(private route: ActivatedRoute, private lugaresService: LugaresService){
    this.id = this.route.snapshot.params['id'];
    this.dragon = this.lugaresService.buscarLugar(this.id);
  }

}
