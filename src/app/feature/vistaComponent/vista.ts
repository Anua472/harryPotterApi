import { Component, inject, OnInit, signal } from '@angular/core';
import { Servicio } from '../../service/servicio';
import { Character } from '../../shared/models/character';
import { VistaItem } from "./vista-item/vista-item";

@Component({
  selector: 'app-vista',
  imports: [
    VistaItem
],
  templateUrl: './vista.html',
  styleUrl: './vista.css',
})

export class Vista implements OnInit{
  private servicio = inject(Servicio);

  characters = signal<Character[]> ([]);


  ngOnInit(): void {
    this.servicio.getCharacters().subscribe((data) => {
      this.characters.set(data);

    }
  ,)

}
// ngOnInit(): void {
//     this.http.get<Characters[]>(this.baseUrl).subscribe({
//       next: (data) => {
//         this.characters.set(data);
//         console.log(data);
//       },
//       error: (err) => console.error('Error al traer personajes:', err)
//     });


}
