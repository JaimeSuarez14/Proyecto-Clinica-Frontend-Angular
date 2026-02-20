import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
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

  obtenerMedicos(): Observable< ResponseMedicos >{
    return this.http.get<ResponseMedicos>(this.apiUrl);

  }
}
