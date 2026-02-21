import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponseMedicos } from '../models/Medico';

@Injectable({
  providedIn: 'root',
})
export class MedicoService {
  apiUrl = "http://localhost:5016/api/medico";
  http = inject(HttpClient);

  constructor(){

  }

  obtenerMedicos(numeroPagina: number, cantidadPorPagina: number, textoBusqueda?: string | null): Observable< ResponseMedicos >{
     // Construir los query params
    let params = new HttpParams()
      .set('cantidad', cantidadPorPagina.toString())
      .set('pagina', numeroPagina.toString());

    // Solo agregar textoBusqueda si tiene un valor (no null, no undefined, no vacío)
    if (textoBusqueda) {
      params = params.set('textoBusqueda', textoBusqueda);
    }

    return this.http.get<ResponseMedicos>(this.apiUrl, { params }) ;

  }
}
