import { Component, OnInit } from '@angular/core';
import { CountrieService } from '../../services/countries.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'country-page',
  templateUrl: './country-page.component.html',
  styles: [
  ]
})
export class CountryPageComponent implements OnInit{

  public country?: Country;
  
  constructor(private activatedRoute: ActivatedRoute, private service:CountrieService, private router:Router ){


  }
  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(({id})=> this.service.searchByAphaCode(id))
    )

    .subscribe(country => {
      
      if(!country)  return this.router.navigateByUrl('');
      
      this.country = country;
     
      console.log(country);
      
      return
      
      

        
        
      } 
    )
  }
  
}
