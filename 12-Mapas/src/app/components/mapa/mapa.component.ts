import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../class/marcador.class';
import { MatSnackBar} from '@angular/material';

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

  constructor(public snackBar: MatSnackBar) {
    if(localStorage.getItem('marcadores')){
        this.marcadores = JSON.parse(localStorage.getItem('marcadores'));
    }
   }

  ngOnInit() {
  }

  agregarMarcador(e:any){
      const coords: {lat:number, lng:number} = e.coords;

      const marcador = new Marcador(coords.lat,coords.lng);

      this.marcadores.push(marcador);
      this.guardarStorage();
      this.snackBar.open('Marcador añadido', 'Cerrar');
  }

  eliminarMarcador(i:number){
    this.marcadores.splice(i,1);
    this.guardarStorage();
    this.snackBar.open('Marcador eliminado', 'Cerrar');

  }

  guardarStorage() {
      localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
