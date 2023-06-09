import { Component } from '@angular/core';
import { GifsService } from '../services/gifs.service';
import { Gif } from '../interfaces/gif.interfaces';

@Component({
  selector: 'app-gifs-page',
  templateUrl: './gifs-page.component.html',
  styleUrls: ['./gifs-page.component.css']
})
export class GifsPageComponent {

  constructor (private gifService: GifsService){
    if(!gifService.historial[0])return;
    gifService.buscarGifs(gifService.historial[0]);
    
  }

  get gifs():Gif[]{
    return this.gifService.listaGif;
  }
}

