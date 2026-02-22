import { type ResponseMedicos } from './../../../core/models/Medico';
import { Component, computed, effect, inject, NgModule, signal } from '@angular/core';
import { MedicoService } from '../../../core/services/medico-service';
import {
  LucideAngularModule,
  CirclePlus,
  Search,
  ChevronRight,
  ChevronLast,
  ChevronLeft,
  ChevronFirst,
} from 'lucide-angular';
import { FormsModule } from '@angular/forms';
import { BotonPaginacion } from "../../../shared/components/boton-paginacion/boton-paginacion";

@Component({
  selector: 'app-medico-page',
  imports: [FormsModule, LucideAngularModule, BotonPaginacion],
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

    effect(() => {
      const numeroPagina = this.numeroPagina();
      const cantidadPorPagina = this.cantidadPorPagina();
      const textoBusqueda = this.textoBusqueda();
      this.obtenerMedicos(numeroPagina, cantidadPorPagina, textoBusqueda);
    });
  }

  obtenerMedicos(pagina: number, cantidad: number, search: string | null = null) {
    this.cargando.set(true);
    this.error.set(null);
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

  /** Metodos para paginar */
  // rango mostrado
  desde = computed(() => this.numeroPagina()==0 ? (this.numeroPagina()+1) : ((this.numeroPagina() * this.cantidadPorPagina() ) + 1));

  hasta = computed(() =>
    Math.min((this.numeroPagina() + 1) * this.cantidadPorPagina(), this.totalMedicos()!),
  );

  totalPaginas = computed(() => Math.ceil(this.totalMedicos()! / this.cantidadPorPagina()));

  // navegación segura
  primera() {
    this.numeroPagina.set(0);
  }

  anterior() {
    if (this.numeroPagina() > 0) this.numeroPagina.update((v) => v - 1);
  }
  siguiente() {
    if (this.numeroPagina() < this.totalPaginas() - 1) this.numeroPagina.update((v) => v + 1);
  }

  ultima() {
    this.numeroPagina.set(this.totalPaginas() - 1);
  }

  public busqueda: string = "";
  buscarPor(){
    this.textoBusqueda.set(this.busqueda);
    this.numeroPagina.set(0);
  }

  //array para los botones de paginacion
  paginacion =computed(()=> [
    {
      icono: ChevronFirst,
      desabled: (this.numeroPagina() <= 0),
      clicked: () => this.primera()
    },
    {
      icono: ChevronLeft,
      desabled: (this.numeroPagina() <= 0),
      clicked: () => this.anterior(),
    },
    {
      icono: ChevronRight,
      desabled: !(this.numeroPagina() < this.totalPaginas() - 1),
      clicked: () => this.siguiente()
    },
    {
      icono: ChevronLast,
      desabled: !(this.numeroPagina() < this.totalPaginas() - 1),
      clicked: () => this.ultima(),
    },
  ])
}
