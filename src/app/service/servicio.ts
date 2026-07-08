import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Character } from '../shared/models/character';

@Injectable({
  providedIn: 'root',
})
export class Servicio {
  baseUrl = 'https://hp-api.onrender.com/api/characters';
  private http = inject(HttpClient);

  getCharacters() {
    return this.http.get<Character[]>(this.baseUrl);
  }

}
