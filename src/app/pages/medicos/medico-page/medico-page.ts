import { type ResponseMedicos } from './../../../core/models/Medico';
import { Component, computed, effect, inject, NgModule, signal } from '@angular/core';
import { MedicoService } from '../../../core/services/medico-service';
import { LucideAngularModule, CirclePlus, Search } from 'lucide-angular';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-medico-page',
  imports: [FormsModule, LucideAngularModule],
  templateUrl: './medico-page.html',
  styleUrl: './medico-page.css',
})
export class MedicoPage {

  readonly search = Search;
  readonly circlePlus = CirclePlus;
  private medicoService = inject(MedicoService);
  private response = signal<ResponseMedicos | null>(null);
  cargando = signal<boolean>(false);
  error = signal<string | null>(null);
  public medicos = computed(() => this.response()?.datos.elementos);
  public totalMedicos = computed(() => this.response()?.datos.cantidad);
  public numeroPagina = signal<number>(0);
  public cantidadPorPagina = signal<number>(2);
  public textoBusqueda = signal<string>('');

  constructor() {
    this.obtenerMedicos(this.numeroPagina(), this.cantidadPorPagina(), this.textoBusqueda());

    effect(() => {
      const numeroPagina = this.numeroPagina();
      const cantidadPorPagina = this.cantidadPorPagina();
      const textoBusqueda = this.textoBusqueda();
      this.obtenerMedicos(numeroPagina, cantidadPorPagina, textoBusqueda);
    });
  }

  obtenerMedicos(pagina: number, cantidad: number, search: string | null = null) {
    this.cargando.set(true);
    this.medicoService.obtenerMedicos(pagina, cantidad, search).subscribe({
      next: (data) => {
        this.response.set(data);
        this.cargando.set(false);
      },
      error: (err) => {
        console.error('Error al cargar los medicos:', err);
        this.error.set('Error al cargar los medicos: ' + err);
      },
    });
  }
}
