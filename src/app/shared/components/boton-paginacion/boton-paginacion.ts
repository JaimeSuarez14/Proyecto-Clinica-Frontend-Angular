import { Component, input, output } from '@angular/core';
import {  LucideAngularModule, LucideIconData } from 'lucide-angular';

@Component({
  selector: 'app-boton-paginacion',
  imports: [LucideAngularModule],
  templateUrl: './boton-paginacion.html',
  styleUrl: './boton-paginacion.css',
})
export class BotonPaginacion {
  icono =  input<LucideIconData>();
  desactivar = input<boolean>(true)
  clicked = output<void>()

  constructor(){
    console.log(this.desactivar());

  }

  hacerClick() {
  if (this.desactivar()) return;
  this.clicked.emit();
}

}
