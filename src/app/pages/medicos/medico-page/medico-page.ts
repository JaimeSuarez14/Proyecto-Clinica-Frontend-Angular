import { type ResponseMedicos } from './../../../core/models/Medico';
import { Component, computed, inject, signal } from '@angular/core';
import { MedicoService } from '../../../core/services/medico-service';
import { flatMap } from 'rxjs';

@Component({
  selector: 'app-medico-page',
  imports: [],
  templateUrl: './medico-page.html',
  styleUrl: './medico-page.css',
})
export class MedicoPage {
  private medicoService = inject(MedicoService);
  private response = signal<ResponseMedicos  | null>(null);
  cargando = signal<boolean >(false);
  error = signal<string | null>(null);
  public medicos = computed(() => this.response()?.datos.elementos)

  constructor(){
    this.obtenerMedicos();
  }

  obtenerMedicos(){
    this.cargando.set(true);
    this.medicoService.obtenerMedicos().subscribe({
      next:(data => {
        this.response.set(data);
        this.cargando.set(false);
      }),
      error:(err) => {
        console.error('Error al cargar los medicos :' , err);
        this.error.set('Error al cargar los medicos :' + err);
      }
    })
  }
}
