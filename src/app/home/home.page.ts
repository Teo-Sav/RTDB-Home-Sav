import { Component, OnInit } from '@angular/core';
//HOME.PAGE.TS

import { Database, object, ref } from '@angular/fire/database';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(private database:Database) {
  }
  //HOME.PAGE.TS

  ngOnInit() {
    const route = ref(this.database, "/casa");
    
    object(route).subscribe(attributes => {
      const valores_db = attributes.snapshot.val();
      console.log(valores_db);//Imprimir valores obtenidos de la busqueda en la ruta 
    });
  }
}
