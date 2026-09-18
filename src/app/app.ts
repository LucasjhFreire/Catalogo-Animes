import { Component } from '@angular/core';
import { TitleComponent } from './header/header';
import { Footer } from './footer/footer'


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleComponent, Footer,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'catalogo-animes';
}

