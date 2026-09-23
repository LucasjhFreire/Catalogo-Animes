import { Routes } from '@angular/router';
import { AnimeCard } from './anime-card/anime-card'


export const routes: Routes = [
    // Quando estiver na página inicial mostra o catálogo de cards 

    { path: '', component: AnimeCard },

    // Quando clica em um anime abre a página de detalhes

    { path: 'anime/:id',}
];

