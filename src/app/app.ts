
import { Component, inject, OnInit, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from "./layout/header/header";
import { Vista } from "./feature/vistaComponent/vista";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, Vista],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private title = signal('harryPotterApi');





}
