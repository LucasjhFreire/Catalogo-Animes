import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; 

@Component({
  selector: 'app-anime-pagina',
  standalone: true,
  imports: [],
  templateUrl: './anime-pagina.html',
  styleUrl: './anime-pagina.css'
})
export class AnimePagina implements OnInit {
  
  // Variavel pra guardar o nome do anime atual

  nomeAnime: string = '';

  // Injetar a rota no contrutor 

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
  this.route.paramMap.subscribe(params => {
    // 1. Pega o id 
    const idBruto = params.get('id') || ''; 
    
    // Troca underline "_" por espaço " " e deicar as primeiras letras em UpperCase(maiscula)
    this.nomeAnime = idBruto
      .replace('_', ' ')
      .replace(/\b\w/g, (l: string) => l.toUpperCase());
  });
}


}