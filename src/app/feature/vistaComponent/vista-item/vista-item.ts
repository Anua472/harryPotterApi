import { Component, Input } from '@angular/core';
import { Character } from '../../../shared/models/character';
import { MatCard, MatCardContent } from '@angular/material/card';

@Component({
  selector: 'app-vista-item',
  imports: [MatCard, MatCardContent],
  templateUrl: './vista-item.html',
  styleUrl: './vista-item.css',
})
export class VistaItem {
  @Input() character?: Character;
}
