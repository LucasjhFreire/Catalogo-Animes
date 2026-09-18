import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-footer',
  styleUrl: './footer.css',
  templateUrl: './footer.html',
})
export class Footer {

  // Criador 
  criador: string = 'Lucas Jhadiel Freire'

  // Redes Sociais 
  instagram: string = 'https://www.instagram.com/lucas_jhfreire/'
  gitHub: string = 'https://github.com/LucasjhFreire'
  whatsapp: string = 'https://wa.me/46999194288'

  // Direitos reservados

 direitos: string = 'Todos os direitos reservados'
}
