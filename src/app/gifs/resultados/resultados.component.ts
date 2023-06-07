import { Component, Input } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
})
export class ResultadosComponent {

  @Input()
  public gifs: Gif[] = [];
}
