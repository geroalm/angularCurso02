import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountrieService } from '../../services/countries.service';

@Component({
  selector: 'by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent {

  public countries:Country[]=[];
  constructor(private countrieService: CountrieService){
  
  }
  
      searchByCountry(term:string):void{
      console.log('desde byContryPage');
      this.countrieService.searchCountry(term).subscribe(
        countries=>{
          this.countries = countries;
          console.log(countries);   
        }
      );
      
          
    }
}
