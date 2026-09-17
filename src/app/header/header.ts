import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})

export class TitleComponent {
  titulo: string = 'AnimesHub';
  onSearch(event: any) {
  console.log(event.target.value)
}
  executarBusca() {
    console.log('Pesquisando...');
  }
}
