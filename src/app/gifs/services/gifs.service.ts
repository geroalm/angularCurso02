import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, QueryResponse } from '../interfaces/gif.interfaces';


@Injectable({
  providedIn: 'root'
})
export class GifsService {

 private _historial: string[]=[];

 private _apiKey='ZwH9DakDgexe2lNOz9LbXGfRaHME8hQv'
 private _url = 'https://api.giphy.com/v1/gifs';

public listaGif: Gif[] = [];

constructor(private http: HttpClient){
  this.loadLocalStorage();
}


 get historial(){
  return [...this._historial];
 }

 buscarGifs(query: string){

  query = query.trim().toLowerCase();


  if(this._historial.includes(query)){
    this._historial = this._historial.filter( (oldQuery) => oldQuery !== query)
  }

    this._historial.unshift(query);
  
    this._historial = this._historial.splice(0,10);
 

    const parametros = new HttpParams()
          .set('apiKey',this._apiKey)
          .set('limit', 10)
          .set('q', query);
       
    
          this.http.get<QueryResponse>(`${this._url}/search`, { params:parametros })
          .subscribe(resp =>{

            this.listaGif= resp.data; 
            this.saveLocalStorage();
            console.log({Gif: this.listaGif});
      
         })
   
 }
  saveLocalStorage():void{
    localStorage.setItem('history', JSON.stringify(this._historial));

  }

  loadLocalStorage():void{
    if (!localStorage.getItem("history")) return;
    this._historial = JSON.parse( localStorage.getItem("history")! );
  }
}
