import { Component, OnInit } from '@angular/core';

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

    lat: number = 51.678418;
    lng: number = 7.809007;

  constructor() { }

  ngOnInit() {
  }

}
