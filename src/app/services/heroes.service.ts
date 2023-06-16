import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import * as data from '../assets/schemas/heroeschemas.json'

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  urlHeroes: string = 'api/heroe';

  constructor(
    private http: HttpClient
  ) { }

  ngOnInit(): void {
  }

  obtenerListadoHeroes(): Observable<any> {
    return of(data)
    // return this.http.get<any>(`${environment.backendUrl}/${this.urlHeroes}`);
  }

}
