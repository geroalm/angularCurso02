import { Component, Input } from '@angular/core';
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent {

  @Input()
  public gifs: Gif[] = [];
}
