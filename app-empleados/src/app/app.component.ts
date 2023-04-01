import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  titulo = 'Listado de empleados';
  empleados:Empleado[]=[

    new Empleado("Juan","Diaz","Presidente",7500),
    new Empleado("Dario","Aicua","Vicepresidente I",5000),
    new Empleado("Ana","Torrojas","Vicepresidente II",5000),
    new Empleado("Mario","Casas","Secretario",1200),
    new Empleado("Alberto","Nuñez","Asistente",1000),


  ];



}
