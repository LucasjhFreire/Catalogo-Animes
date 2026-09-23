import { Component } from '@angular/core';
import { TitleComponent } from './header/header';
import { Footer } from './footer/footer'
import { AnimeCard } from './anime-card/anime-card';
import { RouterOutlet } from '@angular/router';
import { MostrarDetalhes } from './mostrar-detalhes/mostrar-detalhes';
import { Favoritar } from './favoritar/favoritar';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TitleComponent, Footer, AnimeCard, RouterOutlet, MostrarDetalhes, Favoritar],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'catalogo-animes';
}

