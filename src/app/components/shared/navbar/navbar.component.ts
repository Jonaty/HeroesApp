import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  //Para hacer la conexion de la busqueda del navbar al componente del buscador!!!
  buscarHeroe(busqueda:string){
    this._router.navigate(['/buscar', busqueda]);
  }
}
