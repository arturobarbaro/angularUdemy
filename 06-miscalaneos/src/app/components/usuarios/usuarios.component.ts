import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  constructor(private router:ActivatedRoute) {
      this.router.params.subscribe( parametros=>{
          console.log(`${parametros}`)
      })
  }

  ngOnInit() {
  }

}
