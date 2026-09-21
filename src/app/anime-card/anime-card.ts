import { Component } from '@angular/core';
import {Router, RouterLink } from '@angular/router'

@Component({
  imports: [RouterLink],
  selector: 'app-anime-card',
  styleUrl: './anime-card.css',
  templateUrl: './anime-card.html',
})
export class AnimeCard {
  // Criar variaveis com o link dos animes 

  naruto: string = '/anime/naruto';
  dragon_ball: string = '/anime/dragon_ball';
  one_piece: string = '/anime/one_piece';
  jujutsu_kaisen: string = '/anime/jujutsu_kaisen';
  death_note: string = '/anime/death_note';
  demon_slayer: string = '/anime/demon_slayer';
  nanatsu_no_taizai: string = '/anime/nanatsu_no_taizai';
  one_punch_man: string = '/anime/one_punch_man';
}
