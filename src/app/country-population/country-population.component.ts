import { Component } from '@angular/core';
import { CountryPopulation } from '../country-population';
import { environment } from '../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-country-population',
  imports: [RouterLink],
  templateUrl: './country-population.component.html',
  styleUrl: './country-population.component.scss'
})
export class CountryPopulationComponent {
  public countryPopulation: CountryPopulation | undefined;
    
      constructor(private http: HttpClient, private activatedRoute : ActivatedRoute) {
        
      }
    ngOnInit(): void {
      this.getCountryWithPopulation();
    }
  
    getCountryWithPopulation() {
        let id = this.activatedRoute.snapshot.paramMap.get("id");
        this.http.get<CountryPopulation>(`${environment.baseUrl}api/Countries/GetPopulation/${id}`).subscribe({
          next: result => this.countryPopulation = result,
          error: error => console.error(error),
        });
      }
}
