import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../class/marcador.class';

@Component({
  selector: 'app-mapa',
  templateUrl: './mapa.component.html',
  styles: [`
      agm-map {
          height: 600px;
    }
    `]
})
export class MapaComponent implements OnInit {

    marcadores:Marcador[] = [];

    lat: number = 51.678418;
    lng: number = 7.809007;

  constructor() {
      const marcador = new Marcador(this.lat,this.lng);
      this.marcadores.push(marcador);

  }

  ngOnInit() {
  }

  agregarMarcador(e:any){
      const coords: {lat:number, lng:number} = e.coords;

      const marcador = new Marcador(coords.lat,coords.lng);

      this.marcadores.push(marcador);
  }

}
