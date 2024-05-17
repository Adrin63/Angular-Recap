import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent implements OnInit {
  public countries: Country[] = [];
  public initialValue: string = '';
  public isLoading: boolean = false;

  constructor(private CountriesService: CountriesService){}

  ngOnInit(): void {
    this.countries = this.CountriesService.cacheStore.byCountries.countries;
    this.initialValue = this.CountriesService.cacheStore.byCountries.term;
  }

  searchByCountry(term:string):void {
    this.isLoading = true;
    this.CountriesService.searchCountry(term)
    .subscribe(countries => {
      this.isLoading = false;
      this.countries = countries;
    });
  }
}
