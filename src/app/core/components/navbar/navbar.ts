import { Component } from '@angular/core';
import { LucideAngularModule, UserRound , House, Hospital } from 'lucide-angular';
import { RouterLink } from "@angular/router";


@Component({
  selector: 'app-navbar',
  imports: [LucideAngularModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  readonly userRound  = UserRound ;
  readonly  house = House;
  readonly  hospital = Hospital;

}
