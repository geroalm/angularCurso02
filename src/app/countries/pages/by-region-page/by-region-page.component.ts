import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountrieService } from '../../services/countries.service';

@Component({
  selector: 'by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  
  public countries:Country[]=[];
  constructor(private countrieService: CountrieService){
  
  }
  
      searchByRegion(term:string):void{
      console.log('desde byRegionPage');
      this.countrieService.searchRegion(term).subscribe(
        countries=>{
          this.countries = countries;
          console.log(countries);   
        }
      );
      
          
    }
}
