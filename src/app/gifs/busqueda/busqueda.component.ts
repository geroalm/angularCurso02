import { Component, ElementRef, ViewChild } from '@angular/core';
import { GifsService } from '../services/gifs.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent {

  constructor(private service:GifsService){}

  @ViewChild('txtBuscar') 
  busqueda!:ElementRef<HTMLInputElement>;

  buscar(){
    const valor =  this.busqueda.nativeElement.value;

    if(valor.trim().length===0){return}
    this.service.buscarGifs(valor);

    this.busqueda.nativeElement.value="";
  }
}
