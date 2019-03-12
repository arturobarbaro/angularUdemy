import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  nombre = "Arturo";

  array = [1,2,3,4,5,6,7,8,9];

  PI = Math.PI;

  a=0.234;

  salario = 1234.5;

  heroe = {
      nombre: 'Peter',
      clave: 'Spiderman',
      edad: 30,
      direccion:{
          calle: "Primera",
          numero: "12"
      }
  }
}
