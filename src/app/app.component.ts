import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Aula1';
  exibirAmigos = false
  mostrarAmigos(exibir: any) {
    console.log(exibir)
    this.exibirAmigos = exibir
  }
}
