import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios-nuevo',
  template: `
    <p>
      usuarios-nuevo works!
    </p>
  `,
  styles: []
})
export class UsuariosNuevoComponent implements OnInit {

    constructor(private router:ActivatedRoute) {
        this.router.parent.params.subscribe( parametros=>{
            console.log(`padre ${parametros}`)
        })
    }

  ngOnInit() {
  }

}
