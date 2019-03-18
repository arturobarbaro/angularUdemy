import { Component, OnInit } from '@angular/core';
import { Marcador } from '../../class/marcador.class';
import { MatSnackBar} from '@angular/material';
import {MatDialog, MatDialogRef } from '@angular/material';
import { MapaEditarComponent } from './mapa-editar.component';


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

  constructor(
      public snackBar: MatSnackBar,
      public dialog: MatDialog
  ) {
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

  editarMarcador(i:number){
    let marcador = this.marcadores[i];

    const dialogRef = this.dialog.open(MapaEditarComponent, {
      width: '250px',
      data: {titulo: marcador.titulo, desc: marcador.desc}
    });

    dialogRef.afterClosed().subscribe(result => {
        if(result){
            marcador.titulo=result.titulo;
            marcador.desc=result.desc;
            this.guardarStorage();
            this.snackBar.open('Marcador actualizado', 'Cerrar');

        }
    });

  }

  guardarStorage() {
      localStorage.setItem('marcadores', JSON.stringify(this.marcadores));
  }

}
