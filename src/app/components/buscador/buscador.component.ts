import { Component, OnInit } from '@angular/core';
//Para pasar el parametro que esta en la URL del archivo de rutas!!!!!!!!!!!!!!!
import { ActivatedRoute } from '@angular/router';
import { HeroesService, Heroe } from '../../services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  // Se crea un array porque pueden ser varias coincidencias al buscar
  heroes: Heroe[] = [];
  busqueda: string;

  constructor(private activatedRoute: ActivatedRoute, private heroesService: HeroesService) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      // Se agrega el nombre del parametro el cual fue pasado en las rutas
      this.busqueda = params['busqueda'];
      this.heroes = this.heroesService.buscarHeroes(params['busqueda']);
      console.log(this.heroes);
    });
  }

}


