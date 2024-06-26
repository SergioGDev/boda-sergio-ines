import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from 'src/environments/environment';
import { InvitadoSchema } from '../interfaces/datos.interfaces';
import { MesasService } from './mesas.service';
import { switchMap } from 'rxjs/operators';

import * as data from '../assets/schemas/invitadoschemas.json'

@Injectable({
  providedIn: 'root'
})
export class InvitadosService {

  urlInvitado: string = 'api/invitado';
  urlInvitados: string = 'api/invitados';
  urlActualizarCategoria: string = 'api/actualizar-categoria';

  constructor(
    public http: HttpClient,
    private mesasService: MesasService,
  ) { }

  obtenerListadoInvitados(): Observable<any> {
    // return this.http.get(`${environment.backendUrl}/${this.urlInvitado}`);
    return of(data);
  }

  guardarInvitado(invitado: InvitadoSchema): Observable<any> {
    return this.http.post<any>(`${environment.backendUrl}/${this.urlInvitado}`, invitado);
  }

  guardarInvitados(vInvitados: InvitadoSchema[]): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders()
    }

    httpOptions.headers.append('Access-Control-Allow-Origin', '*');
    httpOptions.headers.append('Content-Type', 'application/json');
    httpOptions.headers.append('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    return this.http.post<any>(`${environment.backendUrl}/${this.urlInvitado}/`, vInvitados, httpOptions);
  }

  actualizarInvitado(datosInvitado: InvitadoSchema, id: string) {
    return this.http.put<any>(`${environment.backendUrl}/${this.urlInvitado}/${id}`, datosInvitado);
  }

  eliminarInvitado(id: string) {
    return this.http.delete<any>(`${environment.backendUrl}/${this.urlInvitado}/${id}`);
  }

  eliminarTodosLosInvitados(): Observable<any> {
    return this.mesasService.eliminarTodasLasMesas().pipe(
      switchMap(() => this.http.delete<any>(`${environment.backendUrl}/${this.urlInvitados}`))
    );
  }

  cambiarNombreCategoria(nombreAntiguo: string, nombreNuevo: string): Observable<any> {
    return this.http.post<any>(`${environment.backendUrl}/${this.urlActualizarCategoria}`,
      { 'nombreAntiguo': nombreAntiguo, 'nombreNuevo': nombreNuevo });
  }
}
