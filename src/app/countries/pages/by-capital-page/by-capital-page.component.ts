import { Component, Input } from '@angular/core';
import { CountrieService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';
import { count } from 'rxjs';

@Component({
  selector: 'by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent {

public countries:Country[]=[];
constructor(private countrieService: CountrieService){

}

  searchByCapital(term:string):void{
    console.log('desde byCapitalPageComponent');
    this.countrieService.searchCapital(term).subscribe(
      countries=>{
        this.countries = countries;
        console.log(countries);
        
        
      }
    );
    
        
  }

}
