import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { Observable } from 'rxjs';

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
            'apellido': new FormControl('',[
                Validators.required,
                this.noApellido
            ] )
        }),
        'email': new FormControl('',
            [
                Validators.required,
                Validators.pattern("[A-Za-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$")
            ]
        ),
        'pasatiempos': new FormArray([
            new FormControl('', Validators.required)
        ]),
        'username': new FormControl('', [
            Validators.required,
            this.existeUsuario
            ]),
        'password1': new FormControl('', Validators.required),
        'password2': new FormControl()

    });

    //this.forma.setValue( this.usuario );
    this.forma.controls['password2'].setValidators([
        Validators.required,
        this.noIgual.bind(this.forma)
    ])

  }

  guardarCambios(){
      this.forma.reset(this.usuario);

  }

  agregarPasatiempos(){
    (<FormArray>this.forma.controls['pasatiempos']).push(
        new FormControl('', Validators.required)
    )
  }

  existeUsuario( control:FormControl): Promise<any>|Observable<any>{
      let promesa = new Promise(
          (resolve, reject)=>{
              setTimeout(()=>{
                  if( control.value==="user"){
                      resolve({existe:true})
                  } else {
                      resolve(null)
                  }
              },2000)
          }
      )

      return promesa;
  }
  noApellido( control:FormControl): {[s:string]:boolean}{
      if( control.value == "apellido"){
          return{
              noapellido:true
          }
      }

      return null;
  }

  noIgual( control:FormControl): {[s:string]:boolean}{
      let forma:any=this;

      if( control.value !== forma.controls['password1'].value){
          return{
              noiguales:true
          }
      }

      return null;
  }

  ngOnInit() {
  }

}
