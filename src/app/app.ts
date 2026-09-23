import { Component } from '@angular/core';
import { TitleComponent } from './header/header';
import { Footer } from './footer/footer'
import { AnimeCard } from './anime-card/anime-card';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleComponent, Footer, AnimeCard, RouterOutlet,],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'catalogo-animes';
}

