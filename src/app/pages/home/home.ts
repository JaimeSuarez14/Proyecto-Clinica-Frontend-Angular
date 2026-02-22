import { Component } from '@angular/core';
import { LucideAngularModule, CalendarArrowDown , CalendarArrowUp , Users , IdCard } from 'lucide-angular';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  readonly menu = [
    {
      icon : IdCard,
      name : "Medicos",
      route : "/medicos",
      active : true
    },
    {
      icon : Users ,
      name : "Paciente",
      route : "/pacientes",
      active : true
    },
    {
      icon : CalendarArrowUp ,
      name : "Ingresos",
      route : "/medicos",
      active : true
    },
    {
      icon : CalendarArrowDown ,
      name : "Egresos",
      route : "/medicos",
      active : true
    }

  ]


}
