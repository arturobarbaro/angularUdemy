import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styles: []
})
export class DataComponent implements OnInit {

  forma:FormGroup;

  usuario:Object = {
      nombreCompleto: {
          nombre: null,
          apellido: null,
      },
      email: null,
     pasatiempos: []
      // pais: "",
      // sexo:"",
      // acepta: false
  }

  constructor() {
    this.forma=new FormGroup({

        'nombreCompleto': new FormGroup({
            'nombre': new FormControl('', [
                    Validators.required,
                    Validators.minLength(3)
                ]
            ),
            'apellido': new FormControl('', Validators.required )
        }),
        'email': new FormControl('',
            [
                Validators.required,
                Validators.pattern("[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
            ]
        ),
        'pasatiempos': new FormArray([
            new FormControl('', Validators.required)
        ])

    });

    //this.forma.setValue( this.usuario );

  }

  guardarCambios(){
      this.forma.reset(this.usuario);

  }

  agregarPasatiempos(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
        new FormControl('', Validators.required)
    )
  }

  ngOnInit() {
  }

}
