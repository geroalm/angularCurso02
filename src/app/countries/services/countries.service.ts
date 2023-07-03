import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, catchError, map } from 'rxjs';
import { Country } from '../interfaces/country';

@Injectable({providedIn: 'root'})
export class CountrieService {

    private apiURL:string = 'https://restcountries.com/v3.1';
    constructor(private httpClient: HttpClient) { }
    

    searchCapital(term:string):Observable<Country[]>{

        return this.httpClient.get<Country[]>(`${this.apiURL}/capital/${term}`)
        .pipe(
            catchError(error =>  {
                console.log(error);
                return of([]);
                
            } )
        )
    }
    // https://restcountries.com/v3.1/name/{name}
    searchCountry(term:string):Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.apiURL}/name/${term}`)
        .pipe(
            catchError(error =>  {
                console.log(error);
                return of([]);
                
            } )
        )
    }
    searchRegion(term:string):Observable<Country[]>{
        return this.httpClient.get<Country[]>(`${this.apiURL}/region/${term}`)
        .pipe(
            catchError(error =>  {
                console.log(error);
                return of([]);
                
            } )
        )
    }
    searchByAphaCode (code:string):Observable<Country | null>{
        return this.httpClient.get<Country[]>   (`${this.apiURL}/alpha/${code}`)
        .pipe(
            map(countries => countries.length>0 ? countries[0]: null),
            catchError( () => of(null)
             )
        )
    }

}