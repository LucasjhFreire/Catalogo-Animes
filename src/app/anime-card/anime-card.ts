import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { RouterLink } from '@angular/router';

@Component({
  imports: [CommonModule, RouterLink],
  selector: 'app-anime-card',
  styleUrl: './anime-card.css',
  templateUrl: './anime-card.html',
})
export class AnimeCard {
  // Links
  naruto: string = 'https://www.crunchyroll.com/pt-pt/series/GY9PJ5KWR/naruto';
  dragon_ball: string = 'https://www.crunchyroll.com/pt-pt/series/G8DHV7W21/dragon-ball';
  one_piece: string = 'https://www.crunchyroll.com/pt-pt/series/GRMG8ZQZR/one-piece';
  jujutsu_kaisen: string = 'https://www.crunchyroll.com/pt-pt/series/GRDV0019R/jujutsu-kaisen';
  death_note: string = 'https://www.crunchyroll.com/pt-br/series/G6QWD3EE6/death-note';
  demon_slayer: string = 'https://www.crunchyroll.com/pt-pt/series/GY5P48XEY/demon-slayer-kimetsu-no-yaiba';
  nanatsu_no_taizai: string = 'https://www.crunchyroll.com/pt-pt/series/GY5VZ21KY/seven-mortal-sins';
  one_punch_man: string = 'https://www.crunchyroll.com/pt-pt/series/G63K98PZ6/one-punch-man';

  // Variáveis para abrir/fechar detalhes
  detalhesNaruto: boolean = false;
  detalhesDragonBall: boolean = false;
  detalhesOnePiece: boolean = false;
  detalhesJujutsuKaisen: boolean = false;
  detalhesDeathNote: boolean = false;
  detalhesDemonSlayer: boolean = false;
  detalhesNanatsuNoTaizai: boolean = false;
  detalhesOnePunchMan: boolean = false;

  // Variáveis para favoritar
  favoritoNaruto: boolean = false;
  favoritoDragonBall: boolean = false;
  favoritoOnePiece: boolean = false;
  favoritoJujutsuKaisen: boolean = false;
  favoritoDeathNote: boolean = false;
  favoritoDemonSlayer: boolean = false;
  favoritoNanatsuNoTaizai: boolean = false;
  favoritoOnePunchMan: boolean = false;
}