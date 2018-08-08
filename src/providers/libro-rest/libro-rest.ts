import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Libro } from '../../negocio/libro';

/*
  Generated class for the LibroRestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LibroRestProvider {

  constructor(public http: HttpClient) {
    console.log('Hello LibroRestProvider Provider');
  }

  findAll():Observable<Libro[]> {

    return this.http.get<Libro[]>("http://localhost:3000/libros");
  }


  insert(libro:Libro):Observable<Libro> {

    return this.http.post<Libro>("http://localhost:3000/libros",libro)
      
  }

}
