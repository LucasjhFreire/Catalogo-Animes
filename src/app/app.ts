import { Component } from '@angular/core';
import { TitleComponent } from './header/header';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'catalogo-animes';
}

