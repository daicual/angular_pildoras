import { Component } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent {
  nombre="Darío";
  apodo="Sin apodo";
  bilingue = true;

  cambiarApodo(event:Event){
    this.apodo = (<HTMLInputElement>event.target).value;
  }
}
